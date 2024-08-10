"use client"
import { useRouter } from 'next/navigation';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const router = useRouter()
	const handleLogout = async () => {
		try {
      await signOut(auth);
      router.push('/')
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<nav className='flex justify-around items-center bg-white p-3'>
			<h1 className='nav-head family'>AI HelpNet</h1>
			<button className='btn-Nav' onClick={handleLogout}>
				Log Out
			</button>
		</nav>
	);
};

export default Navbar;
