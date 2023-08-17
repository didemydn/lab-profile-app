import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("");
  const [course, setCourse] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  const navigate = useNavigate();
  
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCampus = (e) => setCampus(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);
  
  const handleSignupSubmit = (e) => {
    // Send a Post request to our server 
    e.preventDefault()

    const user = {username,password, campus, course}
    
    axios.post(`${API_URL}/auth/signup`, user)
        .then(response => {
            console.log('response', response)
            navigate("/login")
        })
        .catch(err => console.log(err))
  };
 
  
  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>
 
      <form onSubmit={handleSignupSubmit}>
        <label>Username:</label>
        <input 
          type="username"
          name="username"
          value={username}
          onChange={handleUsername}
        />
 
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <label>Campus:</label>
        <input 
          type="text"
          name="campus"
          value={campus}
          onChange={handleCampus}
        />

        <label>Course:</label>
        <input 
          type="text"
          name="course"
          value={course}
          onChange={handleCourse}
        />
 
        <button type="submit">Sign Up</button>
      </form>
 
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}
 
export default SignupPage;