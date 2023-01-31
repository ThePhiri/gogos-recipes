import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"
 function Sidebar({links, close}) {
    const location = useLocation()
    return (
       <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} key={link.name} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link" }>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
       </div>
    )
} 

export default Sidebar