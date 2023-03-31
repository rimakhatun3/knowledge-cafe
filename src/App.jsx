import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
     <Cards></Cards>
     <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
