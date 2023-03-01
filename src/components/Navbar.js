import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faUser } from "@fortawesome/free-solid-svg-icons"
import useLogout from "../hooks/useLogout"

export default function Navbar() {
  const location = useLocation()
  const [showSidebar, setShowSidebar] = useState(false)
  const { logout } = useLogout()
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

  function closeSidebar() {
    setShowSidebar(false);
  }

  const handleClick = () => {
    logout()
  }
  return (
    <>
      <div className="flex w-full justify-between p-4">
        <Link to="/" className="font-bold text-orange-600"> Gogos Recipes</Link>
        <div className="nav-links">

          {links.map(link => (
            <Link className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} to={link.path} key={link.name}>{link.name} </Link>
          )

          )}
          <Link onClick={handleClick}>Logout</Link>
          <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>

  )
};

