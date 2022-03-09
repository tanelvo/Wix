import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import './App.css';
import './components/style.css'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
