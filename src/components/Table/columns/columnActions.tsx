import React from 'react'

import { TbodyCellProps } from '../src/TbodyCell'
import { mergeOptions } from './utils'
import Actions from '../../Actions'

interface ActionsOptions extends TbodyCellProps {
  actions: object[]
}

const columnActions = (options: ActionsOptions): TbodyCellProps => mergeOptions({
  render: (props) => {
    return <Actions actions={options.actions} data={props} />
  },
  ...options,
})


export default columnActions