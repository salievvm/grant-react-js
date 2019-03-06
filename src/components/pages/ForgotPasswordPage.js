import React, { Component } from 'react'
import GuestPageBlock from '../blocks/GuestPageBlock';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import { connect } from 'react-redux';
import { createRecoverPasswordToken } from '../../actions/user';


class ForgotPasswordPage extends Component {

    state = {
        pageTitle: 'UStudy Стипендия, Грант - восстановить пароль'
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    submit = email => 
        this.props.createRecoverPasswordToken(email);
    

    render() {

        return (
            <div className="d-md-flex flex-row-reverse">
                <ForgotPasswordForm submit={this.submit}/>
                <GuestPageBlock />
            </div>
        )
    }
}

export default connect(null, {createRecoverPasswordToken})(ForgotPasswordPage);
