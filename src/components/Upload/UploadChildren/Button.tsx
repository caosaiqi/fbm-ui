import React from 'react';
import Button, { FbmButtonProps } from '../../Button'
import { DocumentUploadIcon } from '../../icons'

const UploadButton: React.FC<FbmButtonProps> = ({
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