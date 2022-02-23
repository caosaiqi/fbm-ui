import React, { useState } from 'react';
import { render, fireEvent, screen, queryByText } from '@testing-library/react';
import TextField from '.';
import { rules } from '..';

const CostTextField = () => {
  const [value, setValue] = useState('1');
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return <TextField value={value} aria-label="textfield-test" onChange={handleChange} />
}

const setup = () => {
  const utils = render(<CostTextField />);
  const input = utils.getByLabelText('textfield-test').querySelector('input') as HTMLInputElement;
  return {
    input,
    ...utils,
  }
}

describe('<TextField />', () => {
  it('should render', () => {
    const { unmount } = render(<TextField data-testid="textfield-test" />);
    const element = screen.getByTestId('textfield-test');
    expect(element).toBeInTheDocument();
    unmount();
    expect(element).not.toBeInTheDocument();
  });

  it('should change value', () => {
    const { input } = setup();
    expect(input.value).toBe('1');
    fireEvent.change(input, { target: { value: '123' }})
    expect(input.value).toBe('123');
  });

  it('should render textarea', () => {
    const { container, unmount } = render(<TextField InputProps={{ multiline: true }} />)
    const element = container.querySelector('.MuiInputBase-inputMultiline');
    expect(element).toBeInTheDocument();
    unmount();
    expect(element).not.toBeInTheDocument();
  });
});

