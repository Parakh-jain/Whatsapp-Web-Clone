import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import {auth,provider} from "./firbase";
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider'
function Login(){
    
    const [{},dispatch]=useStateValue()
    
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="data:image/jpeg;base64,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" alt="" />
                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
}

export default Login;