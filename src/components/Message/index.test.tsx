import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Message from '.'
import { Button } from '@mui/material';

const MessageButton = ({children, onClick}) => <div style={{display:'block'}} onClick={onClick} data-testid="MessageButton">{children}</div>

describe('<Message />', () => {
  it('should render success', () => {
    const text = '点击提醒'
    const { getByText, queryByText, unmount } = render(<MessageButton onClick={() => Message.success('success')}><Button>{text}</Button></MessageButton>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
    const { queryByTestId } = render(<MessageButton onClick={() => Message.success('success')}>{text}</MessageButton>)
    userEvent.click(queryByTestId('MessageButton'))
    expect(getByText('success')).toBeInTheDocument()
  });
  it('should render error', () => {
    const text = '点击提醒'
    const { getByText, queryByText, unmount } = render(<MessageButton onClick={() => Message.error('error')}><Button>{text}</Button></MessageButton>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
    const { queryByTestId } = render(<MessageButton onClick={() => Message.error('error')}>{text}</MessageButton>)
    userEvent.click(queryByTestId('MessageButton'))
    expect(getByText('error')).toBeInTheDocument()
  });
  it('should render warning', () => {
    const text = '点击提醒'
    const { getByText, queryByText, unmount } = render(<MessageButton onClick={() => Message.warning('warning')}><Button>{text}</Button></MessageButton>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
    const { queryByTestId } = render(<MessageButton onClick={() => Message.warning('warning')}>{text}</MessageButton>)
    userEvent.click(queryByTestId('MessageButton'))
    expect(getByText('warning')).toBeInTheDocument()
  });
  it('should render info', () => {
    const text = '点击提醒'
    const { getByText, queryByText, unmount } = render(<MessageButton onClick={() => Message.info('info')}><Button>{text}</Button></MessageButton>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
    const { queryByTestId } = render(<MessageButton onClick={() => Message.info('info')}>{text}</MessageButton>)
    userEvent.click(queryByTestId('MessageButton'))
    expect(getByText('info')).toBeInTheDocument()
  });
})
