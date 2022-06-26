import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Vote from './Components/Vote';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/vote' element={<Vote/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
