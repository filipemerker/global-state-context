import React from 'react'
import { ContextProvider } from './context/store'
import Search from './container/Search'

const App = () => {
  return (
    <ContextProvider>
      <Search />
    </ContextProvider>
  )
}

export default App
