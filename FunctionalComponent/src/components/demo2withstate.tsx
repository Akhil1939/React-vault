import React, { useState } from 'react'

export const DemoWithState = () => {
    const [change , setChange]= useState(true)
  return (
    <div>DemoWithState
    <button onClick={()=>{setChange(!change)}}>Click to Change</button>
    {change ? <h1>Welcome to demo</h1> : 
                <h1>A Computer Science Portal</h1>} 
    </div>
  )
}
