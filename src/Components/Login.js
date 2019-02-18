import React from 'react';
import LoginForm from './Loginform';

class Login extends React.Component{  
    render(){
        return(
           <div className="outer-wrapper">
                <div className="login-wrapper">
                    <p>Login page</p>
                    <LoginForm/>
                </div>
           </div>
        )
    }
}

export default Login;