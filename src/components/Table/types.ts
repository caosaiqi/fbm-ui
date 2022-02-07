
import { TableCellProps, PaginationProps, TableContainerProps } from '@mui/material'
import { FbmActionProps } from '../Actions'

export interface CellRenderProps {
  cell: any;
  row: unknown;
}

export type Data = unknown[]
export type NameText =  string | ((type?: string) => string); 
// tdProps
export interface FbmTdColumnProps extends TableCellProps {
  id: string;
  type?: string;
  label?: string;
  row?: unknown;
  checked?: ((props: CellRenderProps) => boolean) | boolean;
  render?: (props: CellRenderProps) => React.ReactNode;
}

// thProps
export interface FbmThColumnProps extends TableCellProps {
  data?: Data;
  selected?: unknown[],
  batchActions?: FbmActionProps['actions'];
  selectedText?: () => string | string;
  nameText?: NameText,
  thReader?: (props: { data: Data }) => React.ReactNode;
}

// 分页
export interface FbmPaginationProps extends PaginationProps {
  total: number;
  /** 当前在多少页 */
  page?: number;
  /** 当前页显示多少条 */
  pageSize?: number;
  // 分页变化时触发
  onPageChange?: (page: number) => Promise<number> | boolean | undefined;
}

export type ColumnProps = FbmTdColumnProps & FbmThColumnProps;

export interface FbmTheadProps {
  data?: Data;
  columns?: ColumnProps[]
  batchActions?: FbmThColumnProps['batchActions'];
  nameText?: NameText;
}

export interface FbmTbodyProps {
  data?: Data;
  columns?: ColumnProps[];
  /** table为空展示的文字 */
  emptyText?: string;
  /** loading */
  loading?: boolean;
}

export interface FbmTableLoading {
  loading?: boolean;
  nameText?: NameText;
}



export type FbmTableProps = {
  /** table对其方式 */
  align?: string;
  /** table名称 */
  nameText?: NameText;
  /** 分页 */
  PaginationProps?: FbmPaginationProps;
  /** TableContainerProps */
  TableContainerProps?: TableContainerProps
} & FbmTbodyProps & FbmTheadProps
