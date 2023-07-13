import React, { memo } from 'react'

const Son = memo((props) => {

  console.log("son")
  return (
    <div>111-{1}</div>
  )
})

export default Son