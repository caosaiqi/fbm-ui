import React from 'react';
import RcUpload, { UploadProps as RcUploadProps } from 'rc-upload'

import UploadList from './UploadList/index'
import { FbmUploadProps, RcFile, UploadFile, UploadChangeParam } from './types'
import { file2Obj, getFileItem, updateFileList, removeFileItem } from './utils'
import { useMergedState } from '../../hooks'
import UploadChildrenButton from './UploadChildren/Button'
import UploadChildrenDragger from './UploadChildren/Dragger'

const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;

const FbmUpload: React.FC<FbmUploadProps> = props => {
  const {
    type,
    accept,
    name,
    multiple,
    children: childrenProp,
    action,
    customRequest,
    fileList,
    defaultFileList,
    maxCount,
    itemRender,
    onChange,
    onRemove,
    showUploadList,
    onDrop,
    headers,
    ...restProps
  } = props

  const [mergedFileList, setMergedFileList] = useMergedState(defaultFileList || [], {
    value: fileList,
    postState: list => list ?? [],
  });

  const [dragState, setDragState] = React.useState<string>('drop');

  const upload = React.useRef<any>();

  // 自动填入uid
  React.useMemo(() => {
    const timestamp = Date.now();

    (fileList || []).forEach((file, index) => {
      if (!file.uid && !Object.isFrozen(file)) {
        file.uid = `__AUTO__${timestamp}_${index}__`;
      }
    });
  }, [fileList]);

  const mergedBeforeUpload = async (file: RcFile, fileListArgs: RcFile[]) => {
    const { beforeUpload } = props;
    let parsedFile: File | Blob | string = file;
    if (beforeUpload) {
      const result = await beforeUpload(file, fileListArgs);

      if (result === false) {
        return false;
      }

      delete (file as any)[LIST_IGNORE];
      if ((result as any) === LIST_IGNORE) {
        Object.defineProperty(file, LIST_IGNORE, {
          value: true,
          configurable: true,
        });
        return false;
      }

      if (typeof result === 'object' && result) {
        parsedFile = result as File;
      }
    }

    return parsedFile as RcFile;
  };

  const onInternalChange = (
    file: UploadFile,
    changedFileList: UploadFile[],
    event?: { percent: number },
  ) => {
    let cloneList = [...changedFileList];

    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount);
    }

    setMergedFileList(cloneList);

    const changeInfo: UploadChangeParam<UploadFile> = {
      file: file as UploadFile,
      fileList: cloneList,
    };

    if (event) {
      changeInfo.event = event;
    }

    onChange?.(changeInfo);
  };

  const onBatchStart: RcUploadProps['onBatchStart'] = batchFileInfoList => {
    const filteredFileInfoList = batchFileInfoList.filter(info => !(info.file as any)[LIST_IGNORE]);
    if (!filteredFileInfoList.length) {
      return;
    }

    const objectFileList = filteredFileInfoList.map(info => file2Obj(info.file as RcFile));
    let newFileList = [...mergedFileList];
    objectFileList.forEach(fileObj => {
      newFileList = updateFileList(fileObj, newFileList);
    });

    objectFileList.forEach((fileObj, index) => {
      let triggerFileObj: UploadFile = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        const { originFileObj } = fileObj;
        let clone;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type,
          }) as any as UploadFile;
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type,
          }) as any as UploadFile;
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        fileObj.status = 'uploading';
      }

      onInternalChange(triggerFileObj, newFileList);
    });
  };

  const onSuccess = (response: any, file: RcFile, xhr: any) => {
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    }

    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = 'done';
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };

  const onError = (error: Error, response: any, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };

  const onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setDragState(e.type);

    if (e.type === 'drop') {
      onDrop?.(e);
    }
  };

  const onProgress = (e: { percent: number }, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = 'uploading';
    targetItem.percent = e.percent;

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList, e);
  };

  const handleRemove = (file: UploadFile) => {
    let currentFile: UploadFile;
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(ret => {
      // Prevent removing file
      if (ret === false) {
        return;
      }

      const removedFileList = removeFileItem(file, mergedFileList);

      if (removedFileList) {
        currentFile = { ...file, status: 'removed' };
        mergedFileList?.forEach(item => {
          const matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed';
          }
        });
        upload.current?.abort(currentFile);

        onInternalChange(currentFile, removedFileList);
      }
    });
  };

  const handleRefresh = (file: UploadFile) => {
    const uploadFiles = upload?.current?.uploader?.uploadFiles
    if (!uploadFiles || typeof uploadFiles !== 'function') {
      return console.warn('uploadFiles方法不存在')
    }

    uploadFiles([file])
  }

  let children: React.ReactNode = null;
  if (type === 'drop') {
    children = (
      <UploadChildrenDragger
        status={dragState}
        {...restProps}
      >
        {childrenProp}
      </UploadChildrenDragger>
    )
  } else if (type === 'button') {
    children = (
      <UploadChildrenButton {...restProps}>
        {childrenProp}
      </UploadChildrenButton>
    )
  } else if (type === 'custom') {
    if (typeof childrenProp === 'function') {
      children = childrenProp(mergedFileList, {
        handleRemove,
        handleRefresh,
        dragState,
      })
    } else {
      children = childrenProp
    }
  }

  const uploadButton = (
    <RcUpload
      ref={upload}
      name={name}
      accept={accept}
      action={action}
      multiple={multiple}
      headers={headers}
      customRequest={customRequest}
      beforeUpload={mergedBeforeUpload}
      onBatchStart={onBatchStart}
      onSuccess={onSuccess}
      onError={onError}
      onProgress={onProgress}
    >
      {children}
    </RcUpload>
  )

  const uploadList = showUploadList ? (
    <UploadList
      items={mergedFileList}
      onRemove={handleRemove}
      onRefresh={handleRefresh}
      itemRender={itemRender}
    />
  ) : null

  return (
    <div
      onDrop={onFileDrop}
      onDragOver={onFileDrop}
      onDragLeave={onFileDrop}
    >
      {uploadButton}
      {uploadList}
    </div>
  )
}

FbmUpload.defaultProps = {
  multiple: false,
  action: '',
  data: {},
  accept: '',
  type: 'button',
  showUploadList: true,
};

export default FbmUpload