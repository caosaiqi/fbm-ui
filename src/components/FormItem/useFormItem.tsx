import React from 'react';
import FormItemContext from './FormItemContext';

export default function useFormItem(): any {
  return React.useContext(FormItemContext);
}
