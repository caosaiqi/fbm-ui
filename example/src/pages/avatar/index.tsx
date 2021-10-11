// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Avatar } from "../../../../src"
import imgUrl from './img.jpg'

// undefined = middle = 默认值
const sizes = ['small', undefined, 'large']

export default () => (
  <div>
    {sizes.map((size) => (
      // eslint-disable-next-line global-require
      <Avatar sx={{ margin: '30px' }}  src={imgUrl} size={size} key={size || 'middle'} />
    ))}
    {sizes.map((size) => (
      <Avatar sx={{ margin: '30px' }}  disabled src={imgUrl} size={size} key={size || 'middle'} />
    ))}
  </div>
)