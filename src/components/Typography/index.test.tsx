import React from 'react';
import { render } from '@testing-library/react';
import Typography from '.'

describe('<Typography />', () => {
  it('should render', () => {
    const text = '张三'
    const { getByText, queryByText, unmount } = render(<Typography variant="body1">{text}</Typography>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
  });
})
