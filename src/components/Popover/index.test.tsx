import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Popover from '.'
import { Button } from '@mui/material';

const PopoverButton = ({children}) => <button data-testid="PopoverButton">{children}</button>

describe('<Popover />', () => {
  it('should render', () => {
    const text = 'Popover'
    const { getByText, queryByText, unmount } = render(<Popover><Button>{text}</Button></Popover>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
  });
  it('should render content', () =>{
    const text = 'Popover'
    const content = 'hello word !!!'
    const { queryByTestId } = render(<Popover content={content} data-testid='popover' trigger="hover" ><PopoverButton>{text}</PopoverButton></Popover>)
    userEvent.hover(queryByTestId('popover'))
    expect(queryByTestId('popover')).toBeInTheDocument()
  });
  it('should render content', () =>{
    const text = 'Popover'
    const content = 'hello word !!!'
    const { queryByTestId } = render(<Popover content={content} data-testid='popover' trigger="click" ><PopoverButton>{text}</PopoverButton></Popover>)
    userEvent.click(queryByTestId('popover'))
    expect(queryByTestId('popover')).toBeInTheDocument()
  });
})
