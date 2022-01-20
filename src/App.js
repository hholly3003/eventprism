import "./App.css";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://cpbootcamp.proxy.beeceptor.com/devjobs")
      .then((response) => {
        let data = response.data;
        // console.log(data);
        setEvents(data);
      });
  }, []);

  return (
    <div className="App">
      <Dashboard events={events} />
    </div>
  );
}

export default App;
