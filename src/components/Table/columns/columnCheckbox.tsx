import React from 'react'
import { Checkbox } from '@mui/material'

import Box from '../../Box'
import { ArrowDropDownIcon } from '../../icons'
import { TbodyCellProps, RenderProps } from '../src/TbodyCell'
import { TheadCellProps } from '../src/TheadCell'
import Popactions from '../../Popactions'
import styled from '@mui/material/styles/styled'


export interface ColumnCheckboxProps {
  checked?: (props: RenderProps) => boolean | boolean;
  selected?: unknown[];
  allChecked?:  () => boolean | boolean;
  indeterminate?:  () => boolean | boolean;
  onChange?: (checked: boolean, props: RenderProps) => void;
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

const ColumnCheckbox = (options: ColumnCheckboxProps): TbodyCellProps | TheadCellProps => {
  const { selected, checked, allChecked, indeterminate, onChange, onAllChange, onPageAllChange } = options

  const formatBool = (boolOrFunc): boolean  => {
    if (typeof boolOrFunc === 'boolean') return boolOrFunc
    if (boolOrFunc && typeof boolOrFunc === 'function') return boolOrFunc()
    return false
  }

  const boolIndeterminate: boolean = formatBool(indeterminate);
  const boolAllChecked: boolean = formatBool(allChecked);

  return {
    selected,
    type: 'checkbox',
    indeterminate: boolIndeterminate,
    width: 52,
    sx: {
      pl: '5px',
      pr: '5px',
    },
    thReader: () => {
      const handleChange = (event) => {
        const checked = event.target.checked
        if (onAllChange) onAllChange(checked)
      }

      const actions = [
        onAllChange && {
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

export default ColumnCheckbox
