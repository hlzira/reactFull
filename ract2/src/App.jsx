import { useState } from 'react'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import './assets/css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default App
