import React from 'react'

import { ColumnProps} from '../types'
import Actions from '../../Actions'

interface ActionsOptions extends ColumnProps {
  actions: object[]
}

const columnActions = (options: ActionsOptions): ColumnProps => ({
  type: 'actions',
  id: 'columnActions',
  thReader: null,
  render: (props) => {
    return (
      <Actions actions={options.actions} data={props} />
    )
  },
  ...options,
})


export default columnActions