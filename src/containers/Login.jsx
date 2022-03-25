import React from 'react';
import LogoYardSale from '@logos/logo_yard_sale.svg';

const Login = () => (
  <div className="login">
    <div className="form-container">
      <img src={LogoYardSale} alt="logo" className="logo-login" />
      <form action="/" className="form">
        <label htmlFor="email" className="label">Email address</label>
        <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" />
        <input type="submit" defaultValue="Log in" className="primary-button login-button" />
        <a href="/">Forgot my password</a>
      </form>
      <button className="secondary-button signup-button">Sign up</button>
    </div>
  </div>

);

export default Login;
