import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}


type LoginPayLoad = {
    username: string,
    nombre: string
}
type AuthAction =
    | { type: 'logout'}
    | {type: 'login', payload: LoginPayLoad};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                //username: action.payload.username,
                //nombre: action.payload.nombre,
                username,
                nombre,
            }
            break;
        default:
            return state;
            break;
    }
}


export const Login = () => {

//    const [state, dispatch] = useReducer(authReducer, initialState)    
    
        const [state, dispatch] = useReducer(authReducer, initialState)
        
        useEffect(() => {
            setTimeout(() => {
            dispatch({type:'logout'}) 
            }, 2500);
        }, []);

        const login = () => {
            dispatch({
                type: 'login',
                payload: {
                    username: 'JAPS',
                    nombre: 'Jorge Alberto'
                }
            })
        }
        const logout = () => {
            dispatch({
                type: 'logout',
             
            })
        }
    
    


    // si se agregara una dependencia 
    if (state.validando) {
        return (
        <>
            <h3>Login</h3>
                <div className="japsAlertInfo_Div">
                    Validando Información...
                </div>   
        </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
        (state.token)?
            (
            <div className="japsAlertSuccess_Div">
                Autenticado:  {state.username}
            </div>
            )
            :
            (
           
            <div className="japsAlertDanger_Div">
                No Autenticado...
            </div>
            )
            }
            {
                (state.token)?
                (
                <button
                name="japsLogout_Button"
                className="japsLogout_Button"
                onClick={logout}
            >
                Logout 
            </button> 
                )
                :
                (
            <button
                name="japsLogin_Button"
                className="japsLogin_Button"
                onClick={login}
            >
                Login   
            </button>   
                )
            }
        </>
    )
}