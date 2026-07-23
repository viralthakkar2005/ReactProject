
import './App.css'
import Login from './component/pages/Login'
import { Routes,Route } from 'react-router-dom'
import Signup from './component/pages/Signup'
import Dashboard from './component/pages/Dashboard'
import Home from './component/pages/Home'
import Upload from './component/pages/Upload'
import Layout from './component/Layout'
function App() {

  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
