import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email:'', password:''}

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({email:e.target.value});
    }
    
    handlePasswordChange (e){
        this.setState({password:e.target.value});
    }

    handleLogin=(e)=>{
        e.preventDefault();
        console.log("handleLogin");
        console.log(this.state);
        //check with email and password in database
        //authenticated or not display message
        //go back to home page (if login not successful)
        //go to messages page if login successful
    }

    handleCancel=(e)=>{
        e.preventDefault();
        //close form and go back to Home page
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleLogin}>
                    <label>Email Address:</label><br/>
                    <input type="email" name="email" 
                    onChange={this.handleEmailChange} 
                    /><br/>
                    <label>Code:</label><br/>
                    <input type="password" name="password" 
                    onChange={this.handlePasswordChange} 
                    /><br/>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default Login;