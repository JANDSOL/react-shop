import React from 'react';
import '@styles/SendEmail.scss';
import LogoYardSale from '@logos/logo_yard_sale.svg';
import Email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="SendEmail-form-container">
				<h1 className="SendEmail-title">Email has been sent!</h1>
				<p className="SendEmail-subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="SendEmail-email-image">
					<img src={Email} alt="email" />
				</div>
				<button className="SendEmail-primary-button SendEmail-login-button">Login</button>
				<p className="SendEmail-resend">
					<span>Didn't receive the email? </span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
