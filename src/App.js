import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    // Main router that allows routes to connect to the app.
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Container></Container> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-color: blue;
//   overflow: scroll;
// `;
