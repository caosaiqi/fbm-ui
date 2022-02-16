import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Typography from '.'

describe('<Typography />', () => {
  it('Typography render', () => {
    const text = '张三'
    const { getByText, queryByText, unmount } = render(<Typography variant="body1">{text}</Typography>);
    expect(getByText(text)).toBeInTheDocument()
    unmount()
    expect(queryByText(text)).not.toBeInTheDocument()
  });
})
