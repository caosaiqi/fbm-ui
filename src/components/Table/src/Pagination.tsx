import React from 'react';
import { Pagination, PaginationProps, Box } from '@mui/material';
import styled from '@mui/material/styles/styled'

export interface FbmPaginationProps extends PaginationProps {
  total: number;
  /** 当前在多少页 */
  page?: number;
  /** 当前页显示多少条 */
  pageSize?: number;
  onPageChange?: (page: number) => Promise<number> | number | boolean | undefined;
}

const Root = styled(Box)({
  height: 62,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const FbmPagination: React.FC<FbmPaginationProps> = ({
  total,
  page,
  pageSize,
  onPageChange,
  ...otherProps
}) => {
  if (!total || total <= 0) return null;
  const [pageNum, setPageNum] = React.useState(page)
  // 总页数
  const count = Math.ceil(total / pageSize)

  const handleChange = async (_, pageNum: number) => {
    if (onPageChange) {
      try {
        const f = await onPageChange(pageNum)
        if (f || f === undefined) {
          const newPageNum = typeof f === 'number' ? f : pageNum
          setPageNum(newPageNum)
        }
      } catch (err) {
        throw err
      }
    }
  }

  return (
    <Root data-testid='pagination-root'>
      <Pagination
        count={count}
        page={pageNum}
        onChange={handleChange}
        {...otherProps}
      />
    </Root>
  )
}

FbmPagination.defaultProps = {
  pageSize: 10,
  page: 1,
}

export default FbmPagination