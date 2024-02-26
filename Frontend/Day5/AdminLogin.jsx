import { useNavigate } from 'react-router-dom';
import '../assets/css/logad.css';
import Navbar from './navbar';

function LoginUi() {  
  const navigate = useNavigate();
  const handleAdLogin =() => {
    navigate("/ad-db");
  }
  return (   
    <div>
<nav>
  <Navbar/>
</nav>

    <div className="login-main">
      <div className="login-sub-main">
        <div className="login-container">
          <div className="login-imgs">
            <div className="login-container-image">
              <img
                alt="profile"
                className="login-profile"
                src="https://res.cloudinary.com/drnokmrib/image/upload/v1708782639/adm-log_rx4x7x.jpg"
              />
            </div>
          </div>
          <div className="login-content">
            <h1>Login Page</h1>
            <form onSubmit={handleAdLogin}>
              <div className="login-input">
                <label>Username</label>
                <input
                  className="login-username"
                  placeholder="Username"
                  required // Added required attribute
                  type="text"
                />
              </div>
              <div className="login-input">
                <label>Password</label>
                <input
                  className="login-password"
                  placeholder="Password"
                  required // Added required attribute
                  type="password"
                />
              </div>
              <div className="login-button">
                <button type="submit">Login</button>
              </div>
            </form>
            <p className="login-link">Dont have an Account?
              <a href="/adReg">  Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
}

export default LoginUi;
