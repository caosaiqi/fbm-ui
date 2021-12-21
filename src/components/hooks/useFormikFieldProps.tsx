import { useFormikContext } from 'formik'

function useFormikFieldProps (inProps){
  const formik = useFormikContext();
  // 判断在<Form>组件下使用
  if (!formik || (inProps && !inProps.name)) return inProps

  const {
    getFieldProps,
    getFieldMeta,
  } = formik

  const fieldProps = getFieldProps(inProps)
  const fieldMeta = getFieldMeta(inProps.name)

  const props = {
    ...inProps,
    ...fieldProps,
  }


  if (fieldMeta.error) {
    props.helperText = fieldMeta.error
    props.error = true
  }

  return props
}

export default useFormikFieldProps