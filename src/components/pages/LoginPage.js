import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import GuestPageBlock from '../blocks/GuestPageBlock';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {

    state = {
        pageTitle: 'UStudy Стипендия, Грант - войдите'
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    submit = data => 
        this.props.login(data).then(() => this.props.history.push('/'));

    render() {

        return (
            <div className="d-md-flex flex-row-reverse">
                <LoginForm submit={this.submit}/>
                <GuestPageBlock />
            </div>
        )
    }
}

export default connect(null, {login})(LoginPage);
