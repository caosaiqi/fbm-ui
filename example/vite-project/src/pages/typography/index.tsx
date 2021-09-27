// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Typography } from "../../../../../src"

const colors = [
  'error',
  'warning',
  'success',
  'info',
  'secondary',
  'primary',
  'disabled',
]
const tags = [
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
]

export default () => {
  const typographys: JSX.Element[] = []
  tags.forEach(tag => {
    colors.forEach(color => {
      typographys.push(
        <div key={`${tag}${color}`} style={{ marginBottom: 10 }}>
          <Typography variant={tag} color={color}>
            hello Typography
          </Typography>
        </div>,
      )
    })
  })
  return typographys
}