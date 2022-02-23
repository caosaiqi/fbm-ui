import React from "react";
import { render } from '@testing-library/react';
import UserInfo from '.';

const chips = [
  {
    label: '有纹身',
    color: 'error'
  }
]

describe('<UserInfo />', () => {
  it('should render', () => {
    const { queryByText, unmount, container } = render(<UserInfo name="马云" chips={chips} />);
    expect(queryByText('马云')).toBeInTheDocument();
    expect(queryByText('有纹身')).toBeInTheDocument();
    expect(container.querySelector('.MuiChip-colorError')).toBeInTheDocument();
    unmount();
    expect(queryByText('马云')).not.toBeInTheDocument();

  })
})