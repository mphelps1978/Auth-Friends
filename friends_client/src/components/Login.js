import React, { Component } from 'react';
import axios from "axios";

class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
        })
        .catch(err => console.log("err", err));
    };

    render(){
        return (
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={this.login}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />

                        <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;