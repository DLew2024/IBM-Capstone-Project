
import '../styles/dist/css/Login.css'

const Login = () => {
  return (
    <div className="container">
      {/* Main container for page content */}
      <div className="login-grid">
        {/* Grid layout for login */}
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          {/* Link to sign-up page */}
          Are you a new member?{' '}
          <span>
            <a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>
              Sign Up Here
            </a>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <div className="btn-group">
              {/* Buttons for login and reset */}
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            <div className="login-text">
              {/* Forgot password */}
              Forgot Password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
