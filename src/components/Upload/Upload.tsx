import React from 'react';
import RcUpload, { UploadProps as RcUploadProps } from 'rc-upload'

import { FbmUploadProps, RcFile, UploadFile, UploadChangeParam} from './types'
import { file2Obj, getFileItem, updateFileList } from './utils'
import { useMergedState } from '../../hooks'

const FbmUpload: React.FC<FbmUploadProps> = (props) => {
  const {
    multiple,
    children,
    action,
    customRequest,
    fileList,
    defaultFileList,
    maxCount,
    onChange,
  } = props

  const [mergedFileList, setMergedFileList] = useMergedState(defaultFileList || [], {
    value: fileList,
    postState: list => list ?? [],
  });

  const onInternalChange = (
    file: UploadFile,
    changedFileList: UploadFile[],
    event?: { percent: number },
  ) => {
    let cloneList = [...changedFileList];

    // Cut to match count
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

  const mergedBeforeUpload = async (file: RcFile, fileListArgs: RcFile[]) => {
    const { beforeUpload } = props;

    let parsedFile: File | Blob | string = file;
    if (beforeUpload) {
      const result = await beforeUpload(file, fileListArgs);

      if (result === false) {
        return false;
      }

      // Hack for LIST_IGNORE, we add additional info to remove from the list
      // delete (file as any)[LIST_IGNORE];
      // if ((result as any) === LIST_IGNORE) {
      //   Object.defineProperty(file, LIST_IGNORE, {
      //     value: true,
      //     configurable: true,
      //   });
      //   return false;
      // }

      if (typeof result === 'object' && result) {
        parsedFile = result as File;
      }
    }

    return parsedFile as RcFile;
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



  return (
    <RcUpload
      action={action}
      multiple={multiple}
      beforeUpload={mergedBeforeUpload}
      customRequest={customRequest}
      onSuccess={onSuccess}
    >
      {children}
    </RcUpload>
  )
}

FbmUpload.defaultProps = {
  multiple: false,
}

export default FbmUpload