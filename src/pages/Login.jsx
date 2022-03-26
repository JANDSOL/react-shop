import React, { useRef } from 'react';
import '@styles/Login.scss';
import LogoYardSale from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
		e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  }

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={LogoYardSale} alt="logo" className="Login-Logo" />
				<form action="/" className="Login-form" ref={form}>
					<label htmlFor="email" className="Login-label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="Login-input Login-input-email" />
					<label htmlFor="password" className="Login-label">Password</label>
					<input type="password" name="password" placeholder="*********" className="Login-input Login-input-password" />
					<button
						className="Login-primary-button Login-LoginButton"
						onClick={handleSubmit}>
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button
					className="Login-secondary-button Login-signup-button">
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
