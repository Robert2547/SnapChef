import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster/>
       <Routes>
          <Route path="/" element={true ? <Home/>: <Navigate to="/login"/> } />
          <Route path="/login" element={false ? <Navigate to="/"/> : <Login />} />
          <Route path="/signup" element={false ? <Navigate to="/"/> : <Signup/>} />
      </Routes> 
    </div>
   
  )
}

export default App
