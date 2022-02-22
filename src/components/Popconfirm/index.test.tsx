import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Popconfirm from '.'
import { Button } from '@mui/material';

const PopconfirmButton = ({children}) => <button data-testid="PopconfirmButton">{children}</button>

describe('<Popconfirm />', () => {
  it('should render', () => {
    const text = 'Popconfirm'
    const { getByText, queryByText, unmount } = render(<Popconfirm><Button>{text}</Button></Popconfirm>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
  });
  it('should render title', () =>{
    const text = 'Popconfirm'
    const title = '您确定要删除吗？'
    const { queryByTestId, getByText } = render(<Popconfirm title={title}><PopconfirmButton>{text}</PopconfirmButton></Popconfirm>)
    userEvent.click(queryByTestId('PopconfirmButton'))
    expect(getByText(title)).toBeInTheDocument();
  });
  it('should render content', () => {
    const text = 'Popconfirm'
    const content = '您确定要删除吗？'
    const { queryByTestId, getByText } = render(<Popconfirm content={content}><PopconfirmButton>{text}</PopconfirmButton></Popconfirm>)
    userEvent.click(queryByTestId('PopconfirmButton'))
    expect(getByText(content)).toBeInTheDocument();
  });
})
