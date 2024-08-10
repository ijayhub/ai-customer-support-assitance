'use client';
import Navbar from '@/components/Navbar';
import ResponseChat from '@/components/ResponseChat';
import { FcCustomerSupport } from 'react-icons/fc';
const Chat = () => {
	return (
		<>
			<Navbar/>
			<header>
				<div className='chat-container'>
					<div className='overlay2'>
						<h2 className='chat-header family'>
							Welcome to <span className='text-orange-700'> AI </span>
							HelpNet
						</h2>
						<p className='chat-para'>Your 24/7 AI-powered customer support.</p>
						<p className='chat-paratext'>
							How can we assist you today?{' '}
							<span>
								<FcCustomerSupport className='text-3xl' />
							</span>{' '}
						</p>
					</div>
				</div>
				<div>
					{/* response container */}
					<ResponseChat/>
				</div>
			</header>
		</>
	);
};

export default Chat;
