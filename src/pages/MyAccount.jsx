import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="MyAccount-title">My account</h1>
				<form action="/" className="MyAccount-Form">
					<div>
						<label for="name" className="MyAccount-label">Name</label>
						<p className="MyAccount-value">Camila Yokoo</p>
						<label for="email" className="MyAccount-label">Email</label>
						<p className="MyAccount-value">camilayokoo@gmail.com</p>
						<label for="password" className="MyAccount-label">Password</label>
						<p className="MyAccount-value">*********</p>
					</div>
					<input type="submit" value="Edit" className="MyAccount-secondary-button MyAccount-login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
