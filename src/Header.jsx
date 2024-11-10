import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className='head'>
      <h1>DEV@Deakin</h1>
      <input type='email' placeholder='Search' />
      <span><Link to="/login">Login</Link></span> 
      <span><Link to="/register">Sign Up</Link></span> 
    </div>
  );
}

export default Header;