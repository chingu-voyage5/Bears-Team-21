import React, { Component } from "react";

class RegistrationPage extends Component {
  state = {
    password: "",
    email: ""
  };

  onEmailChange = e => {
    const value = e.target.value;
    this.setState(() => ({ email: value }));
  };

  render() {
    return (
      <div>
        <h3>Create An Account</h3>
        <form>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={this.state.password} />
        </form>
      </div>
    );
  }
}

export default RegistrationPage;
