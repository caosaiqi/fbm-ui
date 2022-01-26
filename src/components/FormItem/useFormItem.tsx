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

type Params = {
  name: FbmFormItemProps['name'];
  max?: FbmFormItemProps['max'];
  value?: FbmFormItemProps['value'];
  children?: React.ReactElement & React.ReactNode;
  rules?: FbmFormItemProps['rules'],
  label: FbmFormItemProps['label']
}

type Return = FieldInputProps<any> & {
  meta: FieldMetaProps<any>;
  helpers: FieldHelperProps<any>;
  length: GetValueLengthReturn['length']
}

export default function useFormItem(params: Params): Return {
  const {
    name,
    max,
    value
  } = params

  const formik = useFormikContext()

  if (!formik) {
    return {
      value,
    } as Return
  }

  // 利用Formik处理验证
  const { getFieldMeta, getFieldProps, getFieldHelpers } = formik
  const field: FieldInputProps<FormikValues> = getFieldProps({ name })
  const meta: FieldMetaProps<FormikValues> = getFieldMeta(name)
  const helpers: FieldHelperProps<FormikValues> = getFieldHelpers(name)
  const { length } = getValueLength({ value: (field.value as any), max })
  const legacyBag = {
    ...field,
    meta,
    helpers,
    length,
    formik,
  }
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

  return legacyBag
}
