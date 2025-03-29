import SignIn from "./signin"
import './login.styles.scss'

const Login = (props) => {

    return (
    <div className="login mt-20 align-center text-center">
        {props.isLoggedIn}
       
        <SignIn></SignIn>
    </div>
    )
}

export default Login