import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '.'
import { TableColumnCheckbox, TableColumnActions } from './columns'

const data = [
  {
    id: 1,
    name: '张三',
    desc: '男 29岁 182381823',
    date: '2021年11月08日'
  },
  {
    id: 2,
    name: '李四',
    desc: '男 29岁 182381823',
    date: '2021年11月08日'
  }
]
const columns = [
  {
    id: 'name',
    label: '名称',
  },
  {
    id: 'desc',
    label: '信息',
  },
  {
    id: 'date',
    label: '时间',
  },
]

describe('<Table/>', () => {
  it('table render', () => {
    const wrapper = render(<Table data={data} columns={columns} />);
    expect(wrapper.getByText('张三')).toBeInTheDocument()
    expect(wrapper.getByText('李四')).toBeInTheDocument()
    wrapper.unmount()
    expect(wrapper.queryByText('张三')).not.toBeInTheDocument()
    expect(wrapper.queryByText('李四')).not.toBeInTheDocument()
  });

  it('table pagination render', () => {
    const wrapper = render(<Table
      data={data}
      columns={columns}
      PaginationProps={{
        total: 20,
      }}
    />);
    expect(wrapper.getByTestId('pagination-root')).toBeInTheDocument()
    wrapper.unmount()
    expect(wrapper.queryByTestId('pagination-root')).not.toBeInTheDocument()
  });

  it('table batchActions', () => {
    const handleClick = jest.fn()
    const wrapper = render(
      <Table
        data={data}
        columns={[
          TableColumnCheckbox({
            selected: [1]
          }),
          ...columns,
        ]}
        batchActions={[
          { 
            text: '编辑',
            onClick: handleClick
          },
        ]}
      />
    );

    const button = wrapper.getByText('编辑')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('table columnActions', () => {
    const handleClick = jest.fn()
    const wrapper = render(
      <Table
        data={data}
        columns={[
          ...columns,
          TableColumnActions(
            [
              { 
                text: '删除',
                onClick: handleClick
              }
            ]
          )
        ]}
      />
    );

    // const button = wrapper.getByText('删除')
    // console.log(button)
    // fireEvent.click(button)
    // expect(handleClick).toHaveBeenCalledTimes(1)
  });
})
