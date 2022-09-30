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
type AuthAction = { type: 'logout'}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
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
                Autenticado... {state.nombre}
            </div>
            )
            :
            (
           
            <div className="japsAlertDanger_Div">
                No Autenticado...
            </div>
            )
            }
            <button
                className="japsLogin_Button"
            >
                Login   
            </button>   
            <button
                className="japsLogout_Button"
            >
                Logout 
            </button> 
        </>
    )
}