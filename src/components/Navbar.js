import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { faHome, faList, faUser } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import state from "../redux_store/store"


export default function Navbar() {


  // const location = useLocation()
  const [nav, setNav] = useState(false)
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },
    {
      name: "Profile",
      path: "/profile",
      icon: faUser
    }
  ]

  const location = useLocation()
  const user = useSelector((state) => state.userID.userID);
  const handleNavClick = () => setNav(!nav)

  const handleLogout = async () => {

    console.log("logout")
    const id = state.userID.userID.ID



    try {
      const response = await fetch(`$(process.env.REACT_APP_BASE_URL)/api/users/logout/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data)
      if (data) {
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
    }


  }


  return (
    <div className="w-screen h-[80px] bg-white z-10 fixed shadow-md ">
      <div className="max-w-[1240px] flex items-center justify-center m-auto pt-6">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <Link to="/" className="text-2xl mr-4 sm:text-3xl font-bold text-orange-600"> Gogos Recipes.</Link>

            <ul className="hidden md:flex ">
              {links.map((link) => (
                <Link to={link.path} key={link.name}><li className={`p-2 ${location.pathname === link.path ? "text-orange-500" : ""
                  }`}>{link.name}</li> </Link>
              )
              )}
            </ul>

          </div>
          <div className=" hidden md:flex pr-2">
            {user && user.ID.length > 0 ? <><p className="text-black-600 border-orange-600 p-2 mr-4 font-bold">{user.userName}</p><button to="/login" className="border text-white-600 border-orange-600 p-2 hover:bg-transparent hover:text-orange-600 rounded-md mr-4" onClick={handleLogout}>Log out</button></> : <><Link to="/login" className="border text-orange-600 border-orange-600 p-2 hover:bg-transparent hover:text-orange-600 rounded-md mr-4">Login</Link>
              <Link to="/signup" className="text-white border bg-orange-600 border-orange-600 p-2 hover:bg-transparent hover:text-orange-600 rounded-md">Sign Up</Link></>}
          </div>
          <div className="md:hidden">
            {!nav ? <MenuIcon className='w-5 mr-4' onClick={handleNavClick} /> : <XIcon className='w-5 mr-4' onClick={handleNavClick} />}

          </div>
        </div>
        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 "}>
          {links.map(link => (
            <Link to={link.path} key={link.name}><li className="p-1 border-b-2 border-zinc-300 w-full">{link.name}</li> </Link>
          )
          )}
          <div className="flex flex-col my-4 " >
            {user && user.ID.length > 0 ? <> <button className="text-white border bg-orange-600 border-orange-600 p-2 hover:bg-transparent hover:text-orange-600 rounded-md w-full" onClick={handleLogout}>Logout</button>  </> : <> <Link to="/login"><button className="bg-transparent text-orange-600 px-4 py-2 mb-4 mr-2 border border-orange-600 hover:text-white hover:bg-orange-600 rounded-md w-full">Login</button></Link>
              <Link to="/signup"><button className="text-white border bg-orange-600 border-orange-600 p-2 hover:bg-transparent hover:text-orange-600 rounded-md w-full">Sign Up</button></Link>    </>}


          </div>
        </ul>
      </div>

    </div>
  )
};

