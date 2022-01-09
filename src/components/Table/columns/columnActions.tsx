import React from 'react'

import { ColumnProps } from '../types'
import Actions from '../../Actions'

interface ActionsOptions {
  actions: object[]
}

const columnActions = (options: ActionsOptions | object[]): ColumnProps => {
  let actions = []
  if (Array.isArray(options)) {
    actions = options
  } else {
    actions = options.actions || []
  }

  return {
    type: 'actions',
    id: 'columnActions',
    thReader: null,
    render: (props) => {
      return (
        <Actions actions={actions} data={props} />
      )
    },
  }
}


export default columnActions