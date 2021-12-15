import React from 'react'

import { TbodyCellProps } from '../src/TbodyCell'
import Actions from '../../Actions'

interface ActionsOptions extends TbodyCellProps {
  actions: object[]
}

const columnActions = (options: ActionsOptions): TbodyCellProps => ({
  type: 'actions',
  id: 'columnActions',
  // thReader: null,
  render: (props) => {
    return (
      <Actions actions={options.actions} data={props} />
    )
  },
  ...options,
})


export default columnActions