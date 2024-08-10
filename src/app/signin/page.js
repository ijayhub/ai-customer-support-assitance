'use client'
import { async } from '@firebase/util';
import { auth, googleProvider } from '../../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	

	// to create the user email and password
	const handleUser = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			alert('User created successfully');
			router.push('/chat')
		}
		catch (err) {
			console.error(err)
		}
	}
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}
	// for google signin
	const signInWithGoogle = async () => {	
		try {	
			await signInWithPopup(auth, googleProvider);
			alert('User logged in successfully');
			router.push('/chat');
		}
		catch (err) {
			console.error(err)
		}
	}
  return (
		<div className='signin-container'>
			<div className='overlay'>
				<div className='signin-form'>
					<form className='flex flex-col' onSubmit={handleUser}>
						<h2 className='customer-heading family'>Customer Support Sign In</h2>
						<div className='flex flex-col mb-5'>
							<label htmlFor='email' className='label family'>
								Email
							</label>
							<input
								type='email'
								placeholder='Email'
								className='p-2 rounded-lg outline-none'
								value={email}
								onChange={handleEmailChange}
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='password' className='label family'>
								Password
							</label>
							<input
								type='password'
								placeholder='Password'
								className='p-2 rounded-lg outline-none'
								value={password}
								onChange={handlePasswordChange}
							/>
						</div>
						<div className='flex justify-center items-center mt-3'>
							<button type='submit' className='btn1 family'>
								Sign in
							</button>
						</div>
						<div className='pt-3'>
							<hr />
						</div>

						<div className='flex justify-center items-center mt-3'>
							<button
								type='button'
								className='btn2 family '
								onClick={signInWithGoogle}>
								Sign in With Google
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn


