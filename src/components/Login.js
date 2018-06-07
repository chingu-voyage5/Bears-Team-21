import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form>
                    <label>Email Address:</label><br/>
                    <input type="email" name="email"/><br/>
                    <label>Code:</label><br/>
                    <input type="password" name="password"/><br/>
                    <button>Login</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
}

export default Login;