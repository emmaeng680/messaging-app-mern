import {Button} from '@mui/material';
import './Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from '../context/StateProvider'
import {signInWithPopup} from "firebase/auth";


const Login = () => {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
         signInWithPopup(auth,provider).then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
             })
            .catch(error => alert(error.message))
    }
 return (
    <div className="login">
        <div className="login__container">
            <img src="logo512.png" alt="whatsapp" />
            <div className="login__text">
                <h1>Sign in to Messaging App</h1>
                <Button sx={{
                    marginTop : '40px',
                    textTransform: "inherit !important",
                    backgroundColor: "#0a8d48 !important",
                    color: "white"
                            }} 
                variant='contained' onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    </div>
);  
}        

export default Login