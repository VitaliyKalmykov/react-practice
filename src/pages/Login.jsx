import React, {useContext} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../components/context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const submit = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    }

    return (
        <div>
            <form onSubmit={submit} style={{width: "200px", margin: "auto"}}>
                <h1>Login page</h1>
                <MyInput type="text" placeholder="Username"/>
                <MyInput type="password" placeholder="Password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;