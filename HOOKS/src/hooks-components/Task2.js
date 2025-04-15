// Task 2:
// • Use the useEffect()hook to fetch and display data from an API when the
// component mounts.

import React, { useEffect, useState } from 'react'

function Task2() {
  const [data,setdata] =  useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setdata(data) )
   })
  return (
    <div>
        <h1>Data fetch from api using useeffect-hook</h1>
      {data.map((item)=> (
      <ul>
      <li key={item.id}>{item.name}</li>
      <li>{item.email}</li>
  </ul>  
))}
    </div>
  )
}

export default Task2

