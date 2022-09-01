import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home'
import Setup from './pages/Setup/Setup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/setup" element={<Setup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
