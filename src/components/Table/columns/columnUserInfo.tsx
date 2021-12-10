import React from 'react'

import { TbodyCellProps } from '../src/TbodyCell'
import UserInfo, { FbmUserInfoProps } from '../../UserInfo'

interface UserInfoOptions extends TbodyCellProps {
  formatProps?: (props) => FbmUserInfoProps
}

const columnUserInfo = (options: UserInfoOptions): TbodyCellProps => {
  const { formatProps, ...otherOptions} = options
  return {
    render (props) {
      const userInfoProps = {
        ...(formatProps && formatProps(props))
      }
      return <UserInfo {...userInfoProps} />
    },
    ...otherOptions,
  }
}


export default columnUserInfo