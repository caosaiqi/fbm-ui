import React from 'react'

import Box from '../../Box'
import { TbodyCellProps } from '../src/TbodyCell'
import { mergeOptions } from './utils'
import Actions from '../../Actions'

interface ActionsOptions extends TbodyCellProps {
  actions: object[]
}

const columnActions = (options: ActionsOptions): TbodyCellProps => ({
  type: 'actions',
  thReader: null,
  render: (props) => {
    return (
      <Actions actions={options.actions} data={props} />
    )
  },
  ...options,
})


export default columnActions