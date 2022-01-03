import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {


    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {name:'Markos'}
        }
        dispatch(action);
        history.replace('/');
    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}
