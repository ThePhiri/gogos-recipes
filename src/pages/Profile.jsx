import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'

function Profile() {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");

        if (loggedInUser) {
            setAuthenticated(loggedInUser)
        }
    }, [])

    if (authenticated == "") {
        console.log("Unauthorised");
        window.location = "/login";
    } else {
        console.log("authorised")
        return (

            <div>
                <Navbar />


            </div>
        )
    }

}

export default Profile