// • Create react app with use of useSelector & useDispatch. 

import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


//creteslice 
const userslice = createSlice({
  name:"counter",
  initialState:{value:0},
  reducers:{
    increment:(state)=>{state.value=state.value+1},
    decrement:(state)=>{state.value=state.value-1}
  }
})

const {increment,decrement} = userslice.actions

//create store
export const store = configureStore({
  reducer:{
    counter:userslice.reducer
  }
})


//  Counter component using useSelector & useDispatch
function Task3() {

 const dispatch =  useDispatch()
 const count = useSelector((state)=>state.counter.value)
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>count</h2>
      <button onClick={()=>{dispatch(increment())}}> + </button>
    {""} {count} {""}
      <button onClick={()=>{dispatch(decrement())}} style={{ marginLeft: '5px' }}> - </button>
    </div>
  )
}

export default Task3
