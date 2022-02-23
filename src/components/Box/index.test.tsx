import React from 'react';
import { render } from '@testing-library/react';
import Box from '.'

describe('<Box />', () => {
  it('should render with the default', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toHaveClass('MuiBox-root');
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('should render with the loading', () => {
    const {  getByRole } = render(<Box loading />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render with the disabled', () => {
    const { container } = render(<Box disabled />);
    expect(container.firstChild.firstChild).toBeEmptyDOMElement();
  });

  it('should render with the children', () => {
    const Node = ()=> <div data-testid="text">test</div>;
    const { getByTestId } = render(<Box><Node /></Box>);
    expect(getByTestId("text")).toHaveTextContent("test");
  });
});