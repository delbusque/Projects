import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../contexts/AuthContext.js"

const Logout = () => {
    const { logoutUser } = UserAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    handleLogout();
}

export default Logout;