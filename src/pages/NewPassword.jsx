import React from 'react';
import '../styles/NewPassword.scss';
import LogoYardSale from '../logos/logo_yard_sale.svg';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src={LogoYardSale} alt="logo" className="NewPassword-Logo" />
				<h1 className="NewPassword-title">Create a new password</h1>
				<p className="NewPassword-subtitle">Enter a new password for you account</p>
				<form action="/" className="NewPassword-Form">
					<label for="password" className="NewPassword-label">Password</label>
					<input type="password" id="password" placeholder="*********" className="NewPassword-input NewPassword-input-password" />
					<label for="new-password" className="NewPassword-label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="NewPassword-input NewPassword-input-password" />
					<input type="submit" value="Confirm" className="NewPassword-primary-button NewPassword-login-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
