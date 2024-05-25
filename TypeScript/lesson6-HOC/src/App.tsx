import React from 'react'
import OneCompo from './components/OneCompo'
import TwoCompo from './components/TwoCompo'

const App = () => {
  return (
    <div>
      <OneCompo btnname = "one" />
      <TwoCompo btnname = "two"/>
    </div>
  )
}

export default App