import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login(){
        //PostData('login', this.state).then((result)=>{
         //let responseJSON = result;
        //});
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <form className="login-form">
                <label>Username or email address</label>
                <input className="user-input" type="text" name="username" placeholder="username" onChange={this.onChange}/>
                <label>Password</label>
                <input className="user-input" type="password" name="password" placeholder="password" onChange={this.onChange}/>
                <button className="onSubmit btn" type="submit" onClick={this.login}> <a href="#">Sign In</a></button>
            </form>
        )
    }
}

export default LoginForm;