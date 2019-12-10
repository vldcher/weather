import React from 'react';
import './Modal.css';
import LoginForm from '../Forms/LoginForm/LoginForm'


class Modal extends React.Component {
    render() {
        return(
            <div className='modal'>
                <h1>Modal</h1>
                <LoginForm />
            </div>
        );
    }
}

export default Modal;