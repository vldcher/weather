import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        alert('Your data ' + this.state.email + this.state.password);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-field">
                    <label>
                        <p className="form-field__label">email:</p>
                        <input type="email"
                               name="email"
                               placeholder="Email"
                               value={ this.state.value } 
                               onChange={ this.handleEmailChange }
                        />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        <p className="form-field__label">password:</p>
                        <input type="password"
                               name="password"
                               placeholder="Password"
                               value={ this.state.value } 
                               onChange={ this.handlePasswordChange }/>
                    </label>
                </div>
                <div className="form-field">
                    <input type="submit" value="Submit"/>
                </div>
            </form >
        );
    }
}

export default LoginForm;