import React from 'react';
import Button from '../../Button'
import { DocumentUploadIcon } from '../../icons'

const UploadButton: React.FC = ({
  children,
  ...restProps
}) => {
  return (
    <Button
      icon={<DocumentUploadIcon />}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default UploadButton