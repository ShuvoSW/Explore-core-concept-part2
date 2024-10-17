import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
 
  function handelClick(){
    alert('button clicked')
  }
  const handelClick2 = () => {
    alert('button 2 clicked')
  }
  const addToFive = (num) => {
    alert(num+2)
  }

  return (
    <>
     
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me</button>
      <button onClick={()=>{alert('third')}}>Third</button>
      <button onClick={()=>addToFive(3)}>four</button>
      
    </>
  )
}

export default App
