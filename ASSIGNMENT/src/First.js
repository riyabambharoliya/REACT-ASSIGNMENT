// Create a React component that renders a list of items (e.g., a list of fruit names).
// Usethe map()function to render each item in the list.

import React from 'react'

function First() {

    const friutsname = ["Apple","Banana","Cherry","Mango","Grapes"]

  return (
    <div>
        <h2>List Of Items</h2>
     <ul>
        {friutsname.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
     </ul>
    </div>
  )
}

export default First;
