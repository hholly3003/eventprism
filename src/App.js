import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Aboutpage from "./pages/Aboutpage";
import { auth } from "./utils/firebase";
import EventInfo from "./pages/EventInfo";

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
  }, []);
  return (
    // Main router that allows routes to connect to the app.
    <BrowserRouter>
      <div className="App">
        {/* Only one route to show up at a time */}
        <Routes>
          <Route path="/" element={<>
            {!isLogged && <Homepage />}
            {isLogged && <Navigate to={'/dashboard' || '/aboutpage'}/>}
            </>}/>
          <Route path="/login" element={<>
            {isLogged && <Navigate to='/dashboard'/>}
            {!isLogged && <Login />}
            </>} />
          <Route path="/register" element={<>
            {!isLogged && <Register />}
            {isLogged && <Navigate to='/dashboard'/>}
            </>} />
          <Route path="/dashboard" element={<>
            {isLogged && <Dashboard setIsLogged={setIsLogged} isLogged={isLogged}/> || isLogged == false && <Navigate to='/login'/>}
            </>} />
          <Route path="/aboutpage" element={<>
            {isLogged && <Aboutpage setIsLogged={setIsLogged} isLogged={isLogged}/> || isLogged == false && <Navigate to='/login'/>}
            </>} />
          <Route path="/eventinfo/:id" element={<>
            {isLogged && <EventInfo/> || isLogged == false && <Navigate to='/login'/>}
            </>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
