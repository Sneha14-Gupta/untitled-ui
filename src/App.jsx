import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Aside />
      <Form />
    </div>
  )
}

export default App