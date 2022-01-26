import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index'

describe('<Button>', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    console.log(wrapper)
  });
})