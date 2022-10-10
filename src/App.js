import React, { useState } from 'react'
import './App.css'
import MyBody from './MyBody'

function App() {
  const [str, setStr] = useState('Olá mundo')

  function handleClick() {
    setStr('Olá dankiCode')
  }

  return (
    <div className="App">
      <MyBody conteudo="Body1"></MyBody>
    </div>
  )
}

export default App
