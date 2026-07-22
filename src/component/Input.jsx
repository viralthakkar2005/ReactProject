import React, { forwardRef } from 'react'

const Input=forwardRef((
  {
    className="",
    ...props
  },
  ref
)=>{
  return(
    <input
      ref={ref}
      className={`w-full rounded-xl border p-3 ${className}`}
      {...props}
    />
  )
})

export default Input;