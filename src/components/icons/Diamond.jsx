import React from 'react'

function Diamond({ fill, classes }) {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill={fill}
        className={classes}
      >
        <path d='M19,12L12,22L5,12L12,2' />
      </svg>
    </>
  )
}

export default Diamond
