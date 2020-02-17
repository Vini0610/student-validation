import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router-dom';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            authenticatedUser: false,
            errors: {}
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Im clicked")    
        if (this.handleValidation()) {
            this.setState({ authenticatedUser: true });
        }
    }
    handleValidation = () => {
        let formFields = this.state;
        let formValid = true;
        let errors = {};
        console.log(formFields);
        if (!formFields["email"]) {
            formValid = false;
            errors["email"] = "This is a required field";
        }
        if (!formFields["password"]) {
            formValid = false;
            errors["password"] = "This is a required field";
        }
        this.setState({ errors: errors });
        return formValid;
    }
    render() {
        if (this.state.authenticatedUser) {
            return <Redirect to="/dashboard" />
        }
        return (
                <div className="container">
                    <div className="row my-4">
                        <div className="col-sm-6 mx-auto my-4">
                            <h3>Welcome to HTC</h3>
                            <form>
                                <div className="form-group mt-4">
                                    <input type="text" className="form-control" placeholder="Enter your email" name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email} />
                                    <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Enter your password" name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password} />
                                    <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" onClick={this.handleSubmit}>Login </button>
                                </div>
                                {/* <div className="form-group">
                                <a href="#" className="ForgetPwd">Forget Password?</a>
                            </div> */}
                            </form>
                        </div>
                    </div>
                </div>
        
        );
    }
}

export default LoginPage;