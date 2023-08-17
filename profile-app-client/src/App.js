import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsAnon from './components/isAnon';



function App() {
  return (
    <div className="App">
       <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<IsAnon><SignupPage /></IsAnon>}/> 
        <Route exact path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        </Routes>
    </div>
  );
}

export default App;
