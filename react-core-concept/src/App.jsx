import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Players from './Players'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  function handleClick(){
    alert('clicked')
  }

  return (
    <>
      <h2>Vite + React</h2>
      <Friends></Friends>

      <Users></Users>

      <Players></Players>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
