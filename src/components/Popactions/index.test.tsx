import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Popactions from '.'
import { Button } from '@mui/material';

const PopactionsButton = ({children}) => <button data-testid="PopactionsButton">{children}</button>

describe('<Popactions />', () => {
  it('should render', () => {
    const text = 'Popactions'
    const { getByText, queryByText, unmount } = render(<Popactions><Button>{text}</Button></Popactions>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
  });
  it('should render title', () =>{
    const text = 'Popactions'
    const { queryByTestId } = render(<Popactions actions={[{ 
      text: '认证流程',
      variant: 'outlined',
    },
    { 
      text: '新增用户',
      variant:'outlined'
    },]}><PopactionsButton>{text}</PopactionsButton></Popactions>)
    userEvent.click(queryByTestId('PopactionsButton'))
  });
})
