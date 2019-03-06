import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateRecoverPasswordToken, getEmailForPasswordRecover } from '../../actions/user';
import { Link } from 'react-router-dom';
import RecoverPasswordForm from '../forms/RecoverPasswordForm';
import swal from 'sweetalert';

class RecoverPasswordPage extends Component {

    state = {
        loading: true,
        success: false,
    }

    componentDidMount() {
        const { token } = this.props.match.params;
        this.props.getEmailForPasswordRecover(token)
            .then(() => this.setState({
                loading: false,
                success: true
            }))
            .catch(() => {
                this.setState({
                    loading: false,
                    success: false
                });
            });
    }

    submit = data => {
        const { token } = this.props.match.params;
        const recoverPasswordForm = {
            password: data.password,
            userEmailVerificationTokenString: token,
        }

        this.props.validateRecoverPasswordToken(recoverPasswordForm)
            .then(() => this.props.history.push('/login'))
            .catch(() => swal("Ошибка", "Произошла ошибка, попробуйте позже", "warning"));
    }

    render() {

        const { success } = this.state;

        return (
            <div className="signin-wrapper">

                <div className="signin-box">
                    <h2 className="slim-logo">
                        <Link to="/">
                            <img src={require('../../images/logo.png')} className="img-fluid" alt="" width="50%" />
                        </Link>
                    </h2>
                    <h2 className="signin-title-primary">Восстановление пароля</h2>
                    <h3 className="signin-title-secondary">Введите новый пароль</h3>
                    {success ? <RecoverPasswordForm submit={this.submit}/> :
                        <div className="alert alert-danger mg-b-0" role="alert">
                            Ссылка является неактивным. Возможно,
                            Вы или кто-то другой уже использовал ссылку для восстановления пароля.
                        </div>
                    }
                    <br/>
                    <p className="mg-b-0"><Link to="/">На главную</Link></p>
                </div>

            </div>
        )
    }
}

export default connect(null, { validateRecoverPasswordToken, getEmailForPasswordRecover })(RecoverPasswordPage);


