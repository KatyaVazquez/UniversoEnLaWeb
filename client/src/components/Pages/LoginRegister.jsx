import React, {  useState } from "react";

import RegisterForm from "../Register/RegisterForm";
import Login from "../Inicio/Login";
const LoginRegister = () => {
    const [showLogin, setShowLogin] = useState(true);

    const handleToggleClick = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div>
            {showLogin ? <Login /> : <RegisterForm />}
     
        </div>
    );
};

export default LoginRegister;