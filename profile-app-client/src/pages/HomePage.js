import { Link } from "react-router-dom";

function HomePage() {
   
     return (
    <div>
      
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        
    </div>
  );
}
 
  export default HomePage;