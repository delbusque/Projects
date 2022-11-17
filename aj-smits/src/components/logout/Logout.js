import React from "react"
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext.js"

const Logout = () => {
    const { logoutUser } = UserAuth();
    logoutUser().then(data => console.log(data));

    return <Navigate to='/' replace />
}

export default Logout;