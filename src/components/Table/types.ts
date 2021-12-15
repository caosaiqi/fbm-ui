
import { TableCellProps, PaginationProps, TableProps} from '@mui/material'
import { FbmActionProps } from '../Actions'

export interface CellRenderProps {
  cell: any;
  row: unknown;
}

// tdProps
export interface FbmTdColumnProps extends TableCellProps {
  id: string;
  type?: string;
  label?: string;
  row?: unknown;
  render?: (props: CellRenderProps) => React.ReactNode;
}

// thProps
export interface FbmThColumnProps extends TableCellProps {
  selected?: unknown[],
  batchActions?: FbmActionProps['actions'];
  selectedText?: () => string | string;
  thReader?: () => React.ReactNode;
}

// 分页
export interface FbmPaginationProps extends PaginationProps {
  total: number;
  /** 当前在多少页 */
  page?: number;
  /** 当前页显示多少条 */
  pageSize?: number;
  // 分页变化时触发
  onPageChange?: (page: number) => Promise<number> | number | boolean | undefined;
}

export type ColumnProps = FbmTdColumnProps & FbmThColumnProps;

export interface FbmTheadProps{
  columns?: ColumnProps[]
  batchActions?: FbmThColumnProps['batchActions'];
  selectedText?: FbmThColumnProps['selectedText'];
}

export interface FbmTbodyProps{
  data?: unknown[];
  columns?: ColumnProps[]
}


export type FbmTableProps = {
  align?: string;
  pagination?: FbmPaginationProps;
}  & FbmTbodyProps & FbmTheadProps
