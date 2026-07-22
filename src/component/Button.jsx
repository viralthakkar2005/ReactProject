import React from 'react'

export default function Button({
  children,
  type="button",
  className="",
  ...props
}) {
  return (
    <button
    type={type}
    className={`rounded-xl bg-indigo-600 px-4 py-3 text-white hover:bg-indigo-700 ${className}`}
    {...props}
    >
      {children}
    </button>
  )
}
