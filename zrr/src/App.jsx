import { useState } from 'react'
import catLogo from './assets/cat.png'
// import Header from './page/header.html'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Route path="/" element = {<Header />} /> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0" target="_blank">
          <img src={catLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Hello, CatWorld!</h1>
      <p className="read-the-docs">
      Click on the cat
      </p>
    </>
  )
}

export default App
