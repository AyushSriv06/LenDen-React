import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Dashboard} from './pages/Dashboard'
import {Send} from './pages/Send'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/send' element={<Send/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
