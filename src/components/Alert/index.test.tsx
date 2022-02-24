import React from 'react';
import { render } from '@testing-library/react';
import Alert from '.'

describe('<Alert />', () => {
  it('should render with the default', () => {
    const { getByRole } = render(<Alert />);
    expect(getByRole('alert')).toHaveAttribute('type', 'info');
  });

  it('should render with the type', () => {
    const {  getByRole, rerender } = render(<Alert type="success"/>);
    expect(getByRole('alert')).toHaveAttribute('type', 'success');

    rerender(<Alert type="info"/>);
    expect(getByRole('alert')).toHaveAttribute('type', 'info');
    
    rerender(<Alert type="warning"/>);
    expect(getByRole('alert')).toHaveAttribute('type', 'warning');

    rerender(<Alert type="error"/>);
    expect(getByRole('alert')).toHaveAttribute('type', 'error');

    rerender(<Alert type="success"/>);
    expect(getByRole('alert')).toHaveAttribute('type', 'success');
  });

  it('should render with the message', () => {
    const { container } = render(<Alert message="text"/>);
    expect(container).toHaveTextContent("text");
  });

  it('should render with the children', () => {
    const Node = ()=> <div data-testid="text">test</div>;
    const { getByTestId } = render(<Alert><Node /></Alert>);
    expect(getByTestId("text")).toHaveTextContent("test");
  });
});
