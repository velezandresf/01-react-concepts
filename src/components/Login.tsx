import { useEffect } from "react";
import { useReducer } from "react";

interface AuthState {
    validating: boolean;
    token: string | null;
    username: string;
    name: string;
}

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: ''
}

type LoginPayload = {
    username: string;
    name: string
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: ''
            }    
        case 'login':
            const { name, username } = action.payload;

            return {
                validating: false,
                token: "abc123Z",
                username,
                name
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch ({ type: 'logout' })
        }, 1500);
    }, []);

    if (validating) {
        return (
            <>
                <div className="alert alert-info">
                    Validating...
                </div>
            </>
        )
    }

    const login = () => {
        dispatch( { 
            type: "login", 
            payload: {
                username: 'saggan',
                name: "Andres"
             } 
        })
    }
    
    const logout = () => {
        dispatch( {
            type: "logout"
        })
    }
    return (
        <>
            <h3>Login</h3>

            { 
                (token)
                ? <div className="alert alert-success"> Authenticated { name } </div>
                : <div className="alert alert-danger"> Not authenticated... </div>
            }     

            {
                (token)
                ? <button className="btn btn-danger" onClick = { logout }> Logout </button>
                : <button className="btn btn-primary" onClick = { login } > Login </button>
            }
        </>
    )
}
