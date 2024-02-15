import { useState } from 'react'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Main from './pages/main/mainPage'
import Catalog from './pages/catalog/catalog'
import {Routes,Route} from 'react-router-dom'
import './assets/css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Routes>
        <Route path="/" element = {<Main/>} />
        <Route path="/catalog" element = {<Catalog/>} />
      </Routes>
    </>
  )
}

export default App
