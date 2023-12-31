import React, { useContext, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../providers/AuthProvider";
import "./Login.css";

const Login = () => {
    const [show, setShow] = useState(false);


	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	 const from = location.state?.from?.pathname || "/";
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;

		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				form.reset();
				 navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	return (
		<div className="form-container">
			<h2 className="form-title">Login</h2>
			<form onSubmit={handleLogin}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input
						type={show ? "text" : "password"}
						name="password"
						id=""
						required
					/>
					<p onClick={() => setShow(!show)}>
						<small>
							{show ? (
								<span>Hide Password</span>
							) : (
								<span>Show Password</span>
							)}
						</small>
					</p>
				</div>

				<input type="submit" className="btn-submit" value="Login" />

				
			</form>
		</div>
	);
};

export default Login;
