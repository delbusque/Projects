import { useContext, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService.js';


const Logout = () => {

    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => navigate('/'));

    }, [])

    return null;

}

export default Logout;