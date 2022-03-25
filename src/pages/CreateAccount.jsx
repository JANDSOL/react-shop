import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="CreateAccount-title">My account</h1>
				<form action="/" className="CreateAccount-Form">
					<div>
						<label for="name" className="CreateAccount-label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="CreateAccount-input CreateAccount-input-name" />
						<label for="email" className="CreateAccount-label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="CreateAccount-input CreateAccount-input-email" />
						<label for="password" className="CreateAccount-label">Password</label>
						<input type="password" id="password" placeholder="*********" className="CreateAccount-input CreateAccount-input-password" />
					</div>
					<input type="submit" value="Create" className="CreateAccount-primary-button CreateAccount-login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
