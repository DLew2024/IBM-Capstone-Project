import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dist/css/Signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState(''); // State to show error messages
  const navigate = useNavigate(); // Navigation hook from react-router
  return (
    <div className="container" style={{ marginTop: '5%' }}>
      {/* Main container with margin-top */}
      <div className="signup-grid">
        {/* Grid layout for sign-up form */}
        <div className="signup-text">
          {/* Title for the sign-up form */}
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          {/* Text for existing members to log in */}
          Already a member?
          <span>
            <a href="#" style={{ color: '#2190FF' }}>
              Login
            </a>
          </span>
        </div>
        <div className="signup-form">
          {/* Form for user sign-up */}
          <form>
            {/* Start of the form */}
            <div className="form-group">
              {/* Form group for user's name */}
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
              {showerr && (
                <div className="err" style={{ color: 'red' }}>
                  {showerr}
                </div>
              )}
            </div>
            <div className="form-group">
              {/* Form group for user's phone number */}
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
              {showerr && (
                <div className="err" style={{ color: 'red' }}>
                  {showerr}
                </div>
              )}
            </div>
            <div className="form-group">
              {/* Form group for user's email */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
              {showerr && (
                <div className="err" style={{ color: 'red' }}>
                  {showerr}
                </div>
              )}
            </div>
            <div className="form-group">
              {/* Form group for user's password */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
              {showerr && (
                <div className="err" style={{ color: 'red' }}>
                  {showerr}
                </div>
              )}
            </div>
            <div className="btn-group">
              {/* Button group for form submission and reset */}
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
