import { Navigate } from "react-router-dom";
import { checkToken } from "./authToken";

export default function RequireAuth({children}) {
    const token = checkToken();

    if(!token){
        return <Navigate to='/login' />
    }
    return children;
}

