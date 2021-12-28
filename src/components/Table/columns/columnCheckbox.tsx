import React from 'react'
import { Checkbox } from '@mui/material'

import Box from '../../Box'
import { ArrowDropDownIcon } from '../../icons'
import { ColumnProps, CellRenderProps } from '../types'
import Popactions from '../../Popactions'
import styled from '@mui/material/styles/styled'


export interface ColumnCheckboxProps {
  checked?: (props: CellRenderProps) => boolean;
  selected?: unknown[];
  allChecked?: (params: any) => boolean;
  onChange?: (checked: boolean, props: CellRenderProps) => void;
  onAllChange?: (checked: boolean) => void;
  onPageAllChange?: (checked: boolean) => void;
}

const ArrowDropDownIconRoow = styled(ArrowDropDownIcon)({
  color: 'rgb(105, 103, 102)',
  cursor: 'pointer',
  position: 'relative',
  top: '3px',
  left: '-3px',
})

const ThRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})


const columnCheckbox = (options: ColumnCheckboxProps): ColumnProps => {
  const { selected, checked, allChecked, onChange, onAllChange, onPageAllChange } = options

  return {
    selected,
    checked,
    id: 'columnCheckbox',
    type: 'checkbox',
    width: 52,
    sx: {
      pl: '5px',
      pr: '5px',
    },
    thReader: ({ data }) => {

      const handleChange = (event) => {
        const checked = event.target.checked
        if (onAllChange) onAllChange(checked)
      }

      const actions = [
        (onAllChange && onPageAllChange) && {
          text: '全选当前页面',
          onClick: (popup) => {
            popup.onClose()
            onAllChange(true)
          }
        },
        onPageAllChange && {
          text: '全选所有页',
          onClick: (popup) => {
            popup.onClose()
            onPageAllChange(true)
          }
        },
      ].filter((item) => !!item)

      const boolAllChecked: boolean = data && data.length > 0 ?  allChecked({ data }) : false
      const boolIndeterminate: boolean = boolAllChecked === false && (selected && selected.length > 0)

      return (
        <ThRoot>
          <Checkbox
            sx={{ pr: 0 }}
            checked={boolAllChecked}
            indeterminate={boolIndeterminate}
            onChange={handleChange}
          />
          {
            (actions && actions.length > 0) &&
            <Popactions actions={actions}>
              <ArrowDropDownIconRoow />
            </Popactions>
          }
        </ThRoot>
      )
    },

    render: (props) => {
      const handleChange = (event) => {
        const checked = event.target.checked
        if (onChange) onChange(checked, props)
      }

      const getChecked = () => {
        if (typeof checked === 'boolean') return checked
        if (checked && typeof checked === 'function') return checked(props)
      }
    
      return (
        <Checkbox
          checked={getChecked()}
          onChange={handleChange}
        />
      )
    },
  }
}

export default columnCheckbox
