
import React from 'react';
import FormItemContext from './FormItemContext';

export default function useFormItemValue(): any{
  return React.useContext(FormItemContext);
}
