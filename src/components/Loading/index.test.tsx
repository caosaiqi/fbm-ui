import React from 'react';
import { render } from '@testing-library/react';
import Loading from '.'

describe('<Loading />', () => {
  it('should render with the default', () => {
    const { getByRole } = render(<Loading />);
    expect(getByRole("progressbar")).toBeInTheDocument();
    expect(getByRole("progressbar")).toHaveStyle("width: 44px;height:44px");
  
  });

  it('should render with the size', () => {
    const { getByRole} = render(<Loading size={40} />);
    expect(getByRole("progressbar")).toBeInTheDocument();
    expect(getByRole("progressbar")).toHaveStyle("width: 40px;height:40px");
  });

  it('should render with the color', () => {
    const { getByRole, debug, rerender } = render(<Loading color='secondary' />);
    expect(getByRole("progressbar")).toHaveClass("MuiCircularProgress-colorSecondary");
    rerender(<Loading color='primary' />);
    expect(getByRole("progressbar")).toHaveClass("MuiCircularProgress-colorPrimary");
    rerender(<Loading color='error' />);
    expect(getByRole("progressbar")).toHaveClass("MuiCircularProgress-colorError");
    rerender(<Loading color='warning' />);
    expect(getByRole("progressbar")).toHaveClass("MuiCircularProgress-colorWarning");
    rerender(<Loading color='info' />);
    expect(getByRole("progressbar")).toHaveClass("MuiCircularProgress-colorInfo");
    rerender(<Loading color='success' />);
    expect(getByRole("progressbar")).toHaveClass("MuiCircularProgress-colorSuccess");
  });

  it('should render with the desc', () => {
    const { container } = render(<Loading desc="text"></Loading>);
    expect(container).toHaveTextContent("text");
  });
});