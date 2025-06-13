import React from 'react'

const ExampleOne = ({count,countHndler}) => {
  const conter = () => countHndler();
  return (
    <div>
        <h1>Example One</h1>
        <h4>{count}</h4>
        <button onClick={conter}>Inceament</button>
    </div>
  )
}

export default ExampleOne