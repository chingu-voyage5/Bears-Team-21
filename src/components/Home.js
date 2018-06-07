import React from 'react';

//import the Login component and Register component
//for now have the following dummy components
//dummy Login and Register components
import Login from './Login';
//let Login = ()=>(<h3>Login Component</h3>)
let Register = ()=>(<h3>Register Component</h3>)

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewButtons: true,
            viewLogin: false,
            viewRegister: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleLogin() {
        console.log("Login is clicked");
        //make Login component visible
        this.setState({viewButtons: false})
        this.setState({viewLogin :true})
    }
    handleRegister() {
        console.log("register is clicked");
        //make Register Component visible
        this.setState({viewButtons: false})
        this.setState({viewRegister :true})
    }
    render() {
        return (
        <div>
            { (this.state.viewButtons) ? (
                <div>
                <button onClick={this.handleLogin}>Login</button><br/>
                <button onClick={this.handleRegister}>Register</button>
                </div>
                )
                : (this.state.viewLogin) ? <Login/> : <Register/>
            }
            
        </div>
        )
        
    }
}

export default Home;