import {
  DocWordIcon,
  DocPdfIcon,
  DocImageIcon,
  DocUrlIcon,
  DocExcelIcon,
  DocUnknownIcon,
} from '../icons'

import { RcFile, UploadFile, InternalUploadFile } from './types'

export function file2Obj(file: RcFile): InternalUploadFile {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file,
  };
}

export function getFileItem(file: RcFile, fileList: UploadFile[]) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(item => item[matchKey] === file[matchKey])[0];
}

export function updateFileList(file: UploadFile<any>, fileList: UploadFile<any>[]) {
  const nextFileList = [...fileList];
  const fileIndex = nextFileList.findIndex(({ uid }: UploadFile) => uid === file.uid);
  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }
  return nextFileList;
}

export function removeFileItem(file: UploadFile, fileList: UploadFile[]) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name';
  const removed = fileList.filter(item => item[matchKey] !== file[matchKey]);
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}

export const FileIcons = {
  '': DocUnknownIcon,
  '.doc': DocWordIcon,
  '.docx': DocWordIcon,
  '.pdf': DocPdfIcon,
  '.png': DocImageIcon,
  '.jpg': DocImageIcon,
  '.jpeg': DocImageIcon,
  '.html': DocUrlIcon,
  '.excel': DocExcelIcon
}

export const getFileFormat = (fileName: string): string => {
  const index: number = fileName.lastIndexOf('.')
  const ext: string = fileName.substring(index).toLowerCase()
  return ext || ''
}

