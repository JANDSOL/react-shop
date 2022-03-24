import React from 'react';
import '../styles/Login.scss';
import LogoYardSale from '../logos/logo_yard_sale.svg'

const Login = () => {
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={LogoYardSale} alt="logo" className="Login-Logo" />
				<form action="/" className="Login-form">
					<label htmlFor="email" className="Login-label">Email address</label>
					<input type="text" id="email" placeholder="platzi@example.cm" className="Login-input Login-input-email" />
					<label htmlFor="password" className="Login-label">Password</label>
					<input type="password" id="password" placeholder="*********" className="Login-input Login-input-password" />
					<input type="submit" value="Log in" className="Login-primary-button Login-LoginButton" />
					<a href="/">Forgot my password</a>
				</form>
				<button className="Login-secondary-button Login-signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
