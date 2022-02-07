import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '.'

describe('<Table/>', () => {

  it('table render', () => {
    const data = [
      {
        name: '张三',
        desc: '男 29岁 182381823',
        date: '2021年11月08日'
      },
      {
        name: '李四',
        desc: '男 29岁 182381823',
        date: '2021年11月08日'
      }
    ]
    const wrapper = render(<Table data={data} />);
    console.log(wrapper)
  });
})