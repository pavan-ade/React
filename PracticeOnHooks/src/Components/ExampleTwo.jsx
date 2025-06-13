import React from 'react'

const ExampleTwo = ({count,countHndler}) => {
    const counter = () => {countHndler()}
  return (
    <div>
        <h1>Example 2</h1>
       <h4>{count}</h4>
       <button onClick={counter}>Increment</button>
    </div>
  )
}

export default ExampleTwo