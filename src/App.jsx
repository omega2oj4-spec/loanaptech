import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './components/About'
import Privacy from './components/Privacy'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About />
      <Privacy />
    </>
  )
}

export default App