import React from 'react'

import { ColumnProps} from '../types'
import UserInfo, { FbmUserInfoProps } from '../../UserInfo'

interface UserInfoOptions {
  formatProps?: (props) => FbmUserInfoProps
}

const columnUserInfo = (options: UserInfoOptions): ColumnProps => {
  const { formatProps, ...otherOptions } = options
  return {
    id: 'columnUserInfo',
    render(props) {
      const userInfoProps = {
        ...(formatProps && formatProps(props))
      }
      return <UserInfo {...userInfoProps} />
    },
    ...otherOptions,
  }
}


export default columnUserInfo