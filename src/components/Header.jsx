import {MenuIcon} from '@heroicons/react/outline'
import {useNavigate} from 'react-router-dom'

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth,provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'

const Header = () => {

    const [user]  = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = (e) => {
      e.preventDefault();
      signInWithPopup(auth,provider).then(() => navigate('/channels')).catch((error) => alert(error.message))
    }

  return (
    <header className="bg-discord_blue flex items-center justify-between py-4 px-6">
        <a href='/'>
        <img
          src="https://i.ibb.co/Xjc06Sf/Discord-Banner-820x312-removebg-preview.png"
          className="w-12 h-12 object-contain"
          alt=""
        />
        </a>
        <div className="hidden lg:flex space-x-6">
            <a className="link">Download</a>
            <a className="link">Why Discord?</a>
            <a className="link">Nitro</a>
            <a className="link">Safety</a>
            <a className="link">Support</a>
        </div>
        <div className="flex space-x-4">
            <button className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium" onClick={!user?signIn:() => navigate('/channels')}>
                {!user ? "Login" : "Open Discord"}
            </button>
            <MenuIcon className="h-9 text-white cursor-pointer lg:hidden"/>
        </div>
    </header>
  )
}

export default Header
