import React from 'react';
import '@styles/PasswordRecovery.scss';
import LogoYardSale from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={LogoYardSale} alt="logo" className="PasswordRecovery-Logo" />
				<h1 className="PasswordRecovery-title">Password recovery</h1>
				<p className="PasswordRecovery-subtitle">Inform the email address used to create your account</p>
				<form action="/" className="PasswordRecovery-Form">
					<label htmlFor="email" className="PasswordRecovery-label">Email address</label>
					<input type="text" id="email" className="PasswordRecovery-input PasswordRecovery-input-email" />
					<input type="submit" value="Confirm" className="PasswordRecovery-primary-button PasswordRecovery-LoginButton" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
