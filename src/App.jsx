import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Navbar />
        < Hero />
        < Cards />
      </div>
    </>
  )
}

export default App
