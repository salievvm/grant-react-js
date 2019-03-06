import React, { Component } from 'react'
import { connect } from 'react-redux';
import GuestPageBlock from '../blocks/GuestPageBlock';
import RegisterForm from '../forms/RegisterForm';
import { registerUser } from '../../actions/user';

class RegisterPage extends Component {

    submit = user =>
        this.props.registerUser(user).then(() => this.props.history.push('/login'));

    render() {

        return (
            <div className="d-md-flex flex-row-reverse">
                <RegisterForm submit={this.submit}/>
                <GuestPageBlock />
            </div>
        )
    }
}

export default connect(null, {registerUser})(RegisterPage);
