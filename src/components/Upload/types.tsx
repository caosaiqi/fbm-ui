import { UploadProps as RcUploadProps } from 'rc-upload'
import {
  RcFile as OriRcFile,
  UploadRequestOption as RcCustomRequestOptions,
} from 'rc-upload/lib/interface';

type BeforeUploadValueType = void | boolean | string | Blob | File;

export type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
export type Action = string | ((file: RcFile) => string | PromiseLike<string>);

export interface UploadFile<T = any> {
  uid: string;
  size?: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: RcFile;
  response?: T;
  error?: any;
  linkProps?: any;
  type?: string;
  xhr?: T;
  preview?: string;
}

export interface UploadChangeParam<T extends object = UploadFile> {
  file: T;
  fileList: UploadFile[];
  event?: { percent: number };
}

export interface FbmUploadProps<T = any> {
  /** 上传地址 */
  action?: Action;
  /** 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件 */
  multiple?: RcUploadProps['multiple'];
  /** 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）；也可以返回 Upload.LIST_IGNORE，此时列表中将不展示此文件。 注意：IE9 不支持该方法 */
  beforeUpload?: (
    file: RcFile,
    FileList: RcFile[],
  ) => BeforeUploadValueType | Promise<BeforeUploadValueType>;
  /** 通过覆盖默认的上传行为，可以自定义自己的上传实现 */
  customRequest: (options: RcCustomRequestOptions) => void;
  /** 默认已经上传的文件列表 */
  defaultFileList?: Array<UploadFile<T>>;
  /** 已经上传的文件列表（受控 */
  fileList?: Array<UploadFile<T>>;
  maxCount?: number;
  onChange?: (info: UploadChangeParam) => void;
}

export interface RcFile extends OriRcFile {
  readonly lastModifiedDate: Date;
}

export interface InternalUploadFile<T = any> extends UploadFile<T> {
  originFileObj: RcFile;
}