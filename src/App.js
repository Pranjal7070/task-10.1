import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routes/Login'; 
import SignUp from './routes/SignUp'; 
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
}


export default App;