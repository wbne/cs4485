import React from 'react';
import './Header.css';

function Header() {
	// TODO: Have a system to check and return the proper header
	let loggedIn = false;

	if(loggedIn)
	return (
		<div className="Header">
		<img className="Logo" alt="ᴛᴜᴛᴏʀᴋᴇꜱʜ"></img>
		<div className="Options">
			<a>Find Tutor</a>
			<a>Favorites</a>
			<a>Appointments</a>
			<a>Profile</a>
		</div>
		</div>
	);
	else
	return (
		<div className="Header">
		<img className="Logo" alt="ᴛᴜᴛᴏʀᴋᴇꜱʜ"></img>
		<div className="Options">
			<a>Student Login</a>
			<a>Tutor Login</a>
		</div>
		</div>
			
	);

}

export default Header;
