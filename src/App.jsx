import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import All from './All'
import Full_Stack_Development from './Full_Stack_Development'
import Data_Science from '../Data_Science'
import Cybersecurity from '../Cybersecurity'
import Career from '../Career'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/Full_Stack_Development' element={<Full_Stack_Development/>}/>
        <Route path='/Data_Science' element={<Data_Science/>}/>
        <Route path='/Cybersecurity' element={<Cybersecurity/>}/>
        <Route path='/Career' element={<Career/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
