import React from 'react'
import {ArrowLeftIcon , ArrowRightIcon } from '@heroicons/react/outline'

export const ButtonSlider = ({direction,moveSLice}) => {
  return (
    <button onClick={moveSLice}>
        {direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  )
}
