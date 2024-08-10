'use client';
import SignIn from '@/app/signin/page';
import { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';


const Loader = () => {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoader(false);
		}, 2000); 

		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<main className='bg-purple-100'>
				{loader && (
					<div className='flex flex-col pt-54 justify-center items-center h-screen '>
						
						<Bars
							height='60'
							width='60'
							color='#000'
							ariaLabel='bars-loading'
							wrapperStyle={{}}
							wrapperClass=''
							visible={true}
						/>
						</div>
				)}
			</main>
			<div>{!loader && <SignIn/> }</div>
		</>
	);
};

export default Loader;
