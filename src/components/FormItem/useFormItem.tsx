import React from 'react'
import {
  useFormikContext,
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  FormikValues
} from 'formik'

import validate from './validate'
import getValueLength, { GetValueLengthReturn } from '../../utils/getValueLength'
import { FbmFormItemProps } from './FormItem'

export type UseFormItemParams = {
  name: FbmFormItemProps['name'];
  max?: FbmFormItemProps['max'];
  value?: FbmFormItemProps['value'];
  children?: React.ReactElement & React.ReactNode;
  rules?: FbmFormItemProps['rules'],
  label: FbmFormItemProps['label']
}

export type UseFormItemReturn = FieldInputProps<any> & {
  meta: FieldMetaProps<any>;
  helpers: FieldHelperProps<any>;
  length: GetValueLengthReturn['length']
}

export default function useFormItem(params: UseFormItemParams): UseFormItemReturn {
  const {
    name,
    max,
    value
  } = params

  const formik = useFormikContext()

  if (!formik) {
    return {
      value,
    } as UseFormItemReturn
  }

  // 利用Formik处理验证
  const { getFieldMeta, getFieldProps, getFieldHelpers } = formik
  const field: FieldInputProps<FormikValues> = getFieldProps({ name })
  const meta: FieldMetaProps<FormikValues> = getFieldMeta(name)
  const helpers: FieldHelperProps<FormikValues> = getFieldHelpers(name)
  const { length } = getValueLength({ value: (field.value as any), max })

  // 处理验证
  const { registerField, unregisterField } = formik;
  React.useEffect(() => {
    registerField(name, {
      validate: async (value) => {
        const error: any = await validate(value, params)
        return error
      }
    });
    return () => {
      unregisterField(name);
    };
  }, [name]);

  const handleChange = (event: React.ChangeEvent<any>) => {
    if (meta.touched === false) {
      helpers.setTouched(true)
    }
    return field.onChange(event)
  }

  return {
    ...field,
    meta,
    helpers,
    length,
    onChange: handleChange,
  }
}
