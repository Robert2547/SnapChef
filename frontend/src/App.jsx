import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Profile from "./pages/profile/Profile";
import Sidebar from "./components/sidebar/SideBar";
function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex">
      <Toaster />
      {authUser && <Sidebar />} 
      <div className="flex-grow flex items-center justify-center">
        {" "}
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
