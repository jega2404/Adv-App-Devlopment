import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Replace this with your actual authentication logic (e.g., API call)
      const response = await mockAuthentication(username, password);

      if (response.success) {
        alert('Login successful');
        // Perform additional actions like redirecting the user
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setError('An error occurred during authentication');
    }
  };

  const mockAuthentication = (username, password) => {
    // Replace this with your actual authentication logic (e.g., API call)
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        if (username === 'demo' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <html key="1">
      <head>
        <title>
          Slide Navbar
        </title>
        <link
          href="slide navbar style.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>

        <div className="main">
          <input
            aria-hidden="true"
            id="chk"
            type="checkbox"
          />
          <div className="signup">
            <form>
              <label
                aria-hidden="true"
                htmlFor="chk"
              >
                Sign up
              </label>
              <input
                name="txt"
                placeholder="User name"
                required
                type="text"
              />
              <input
                name="email"
                placeholder="Email"
                required
                type="email"
              />
              <input
                name="pswd"
                placeholder="Password"
                required
                type="password"
              />
              <input
                name="confirm pswd"
                placeholder="Confirm Password"
                required
                type="password"
              />
              <input
                name="mobile No"
                placeholder="Enter your number"
                required
                type="number"
              />
              <div>
                <label htmlFor="role">Role:</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                  <option value="office staff">Office Staff</option>
                </select>
              </div>
              <button>
                Sign up
              </button>
            </form>
          </div>
          <div className="login">
            <form onSubmit={handleLogin}>
              <label className='log'
                aria-hidden="true"
                htmlFor="chk"
              >
                Login
              </label>
              <input
                name="email"
                placeholder="Email"
                required
                type="email"
              />
              <input
                name="pswd"
                placeholder="Password"
                required
                type="password"
              />
              <Link to="/homepage"><button>Login</button></Link>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Login;
