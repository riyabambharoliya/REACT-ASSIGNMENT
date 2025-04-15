// Task 1:
// • Create a functional component with a counter using the useState()hook. Include
// buttons to increment and decrement the counter.

import React, { useState } from 'react'
function Task1() {
    const [count, setcount] = useState(0)
  return (

    <div className='container'>
       <h1>Counter App using usestate-hook</h1>
        <button onClick={()=>{setcount(count+1)}}> + </button>
       {" "} {count} {" "}
        <button onClick={()=>{setcount(count-1)}}> - </button>
    </div>
  )
}

export default Task1