
import './App.css'
import Login from './component/pages/Login'
import { Routes,Route } from 'react-router-dom'
import Signup from './component/pages/Signup'
import Dashboard from './component/pages/Dashboard'
import Home from './component/pages/Home'
function App() {

  return (
    <>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
