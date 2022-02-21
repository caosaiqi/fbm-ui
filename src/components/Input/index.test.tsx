import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '.';

const CostInput = () => {
  const [value, setValue] = useState('1');
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return <Input value={value} aria-label="input-test" onChange={handleChange} ></Input>
}

const setup = () => {
  const utils = render(<CostInput />);
  const input = utils.getByLabelText('input-test').querySelector('input') as HTMLInputElement;
  return {
    input,
    ...utils,
  }
}

describe('<Input />', () => {
  it('should render', () => {
    const { getByLabelText, unmount } = render(<Input aria-label="input-test" />)
    const element = getByLabelText('input-test');
    expect(element).toBeInTheDocument();
    unmount();
    expect(element).not.toBeInTheDocument();
  });

  it('should render value', () => {
    const { input } = setup();
    expect(input.value).toBe('1');
    fireEvent.change(input, { target: { value: '123' }})
    expect(input.value).toBe('123');
  });

  it('should render variantComponent', () => {
    const { container, unmount } = render(<Input variant="outlined" />)
    const element = container.querySelector('.MuiOutlinedInput-root');
    expect(element).toBeInTheDocument();
    unmount();
    expect(element).not.toBeInTheDocument();
    const { container: standCon } = render(<Input variant="standard" />)
    expect(standCon.querySelector('.MuiOutlinedInput-root')).not.toBeInTheDocument();
  });
});