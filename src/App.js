import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // Main router that allows routes to connect to the app.
    <BrowserRouter>
      <div className="App">
        {/* Only one route to show up at a time */}
        <Routes>
          <Route path="/dashboard"/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
