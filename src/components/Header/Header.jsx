import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

	const { user, logOut } = useContext(AuthContext)
	
	const handleLogout = () => {
		logOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});

	}
	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div>
				<Link to="/">Shop</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/inventory">Inventory</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>

				{
					user && <span className="text-white">Welcome { user.email} <button onClick={handleLogout}>logout</button> </span>
				}
			</div>
		</nav>
	);
};

export default Header;
