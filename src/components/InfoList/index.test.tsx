import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InfoList from '.';

const rows = [{ id: 'name', label: '姓名' }];
const data = { name: '小明' };

describe('<InfoList />', () => {
  it('should render', () => {
    const { queryByText, unmount } = render(<InfoList rows={rows} data={data} />);
    expect(queryByText('姓名')).toBeInTheDocument();
    expect(queryByText('小明')).toBeInTheDocument();
    unmount();
    expect(queryByText('姓名')).not.toBeInTheDocument();
    expect(queryByText('小明')).not.toBeInTheDocument();
  });

  it('should be title', () => {
    const { queryByText, unmount } = render(<InfoList rows={rows} data={data} title="测试" />);
    expect(queryByText('测试')).toBeInTheDocument();
    unmount();
    expect(queryByText('测试')).not.toBeInTheDocument();
  });

})