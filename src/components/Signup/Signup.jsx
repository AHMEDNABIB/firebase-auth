import React, { useContext, useState } from 'react';

import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('')
    
    const {createUser}= useContext(AuthContext)
   
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        setError('')
        
        if (password !== confirm) {
            setError('Your password did not match')
            return
        
        }
        else if (password.length < 6) {
            setError('password should be greater than 6 character')
            return
            
        }
        
        createUser(email, password)
			.then((userCredential) => {
				// Signed up
                const user = userCredential.user;
                console.log(user)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
       
    }



    return (
		<div className="form-container">
			<h2 className="form-title">Sign up</h2>
			<form  onSubmit={handleSignup}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="" required />
				</div>
				<div className="form-control">
					<label htmlFor="confirm">Password</label>
					<input type="password" name="confirm" id="" required />
				</div>

                <input type="submit" className="btn-submit" value="Sign Up" />

                <p className='text-error'>{ error }</p>
            </form>
            
            <p><small>Already have an account ? <Link to="/login">Login</Link></small></p>
		</div>
	);
};

export default Signup;