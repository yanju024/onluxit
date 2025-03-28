import SignIn from "./signin"

const Login = (props) => {

    return (
    <div className="mt-20 align-center text-center">
        {props.isLoggedIn}
       
        <SignIn></SignIn>
    </div>
    )
}

export default Login