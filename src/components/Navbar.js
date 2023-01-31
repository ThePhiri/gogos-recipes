import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faUser} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
  const location = useLocation()
  const [showSidebar, setShowSidebar ] = useState(false)
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
      name: "Login",
      path: "/login",
      icon: faUser
    },  
  ]

  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
        <div className="navbar container">
      <Link to="/" className="logo"> Gogos Recipes</Link>
      <div className="nav-links">
        { links.map(link => (
          <Link className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link" } to={link.path} key={link.name}>{link.name} </Link>
        )

        )}
      </div>
      <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
    </div>
    {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>

  )
};

