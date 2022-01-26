import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Aboutpage from "./pages/Aboutpage";
import { auth } from "./utils/firebase";

function App() {
  const [isLogged, setIsLogged] = useState(null)
  useEffect(() => {
    // Authenticate the user and only user who has signed in can access dashboard
    const unSub = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    })
    return unSub();
  }, [isLogged]);
  return (
    // Main router that allows routes to connect to the app.
    <BrowserRouter>
      <div className="App">
        {/* Only one route to show up at a time */}
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<>
            {!isLogged && <Login />}
            {isLogged && <Navigate to='/dashboard'/>}
            </>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<>
            {!isLogged && <Navigate to='/login'/>}
            {isLogged && <Dashboard setIsLogged={setIsLogged}
            // {isLogged && <}
            />}
            </>} />
          <Route path="/aboutpage" element={<>
            {!isLogged && <Navigate to='/login'/>}
            {isLogged && <Aboutpage setIsLogged={setIsLogged}
            // {isLogged && <}
            />}
            </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
