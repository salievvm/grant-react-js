import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Validator from 'validator';

class ForgotPasswordForm extends Component {

    state = {
        data: {
            email: '',
        },
        loading: false,
        success: false,
        errors: {}
    }

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data.email)
                .then(() => this.setState({success:true, loading: false}))
                .catch((err) => {
                    const errors = !!err.response === true ? this.translateServerError(err.response.data.error) :
                        this.translateServerError()
                    this.setState({ errors });
                    this.setState({ loading: false, success: false });
                });
        }
    }

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = 'Неправильный email';
        return errors;
    }

    translateServerError = (error = null) => {
        const errors = {};
        if (!error) errors.global = 'Произошла ошибка, попробуйте позже';
        if (error) errors.global = 'Такой email не зарегестрирован';
        if (error && error.includes('user_email_activation_tokens_user_id_uindex')) errors.global = 'На ваш email уже отправлено письмо с инструкциями';
        return errors;
    }

    render() {

        const { data, errors, loading, success } = this.state;

        return (
            <div className="signin-right">

                <div className="signin-box">
                    <h2 className="signin-title-primary">Восстановление пароля</h2>
                    <h3 className="signin-title-secondary">Введите email чтобы восстановить пароль</h3>
                    {errors.global &&
                        <div>
                            <div className="alert alert-danger mg-b-0" role="alert">
                                {errors.global}
                            </div>
                            <br />
                        </div>
                    }
                    {success &&
                        <div>
                            <div className="alert alert-success mg-b-0" role="alert">
                                На ваш email отправлено письмо с инструкциями.
                                Следуйте этим инструкциям, чтобы восстановить пароль.
                            </div>
                            <br />
                        </div>
                    }
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={this.onChange}
                            className={errors.email ? "form-control parsley-error" : "form-control"}
                            placeholder="Email" />
                        {errors.email &&
                            <ul className="parsley-errors-list filled">
                                <li className="parsley-required">{errors.email}</li>
                            </ul>
                        }
                    </div>{/* form-group */}

                    <button
                        disabled={loading}
                        onClick={this.onSubmit}
                        type="submit"
                        className="btn btn-primary btn-block btn-signin">
                        {loading ?
                            <div className="sk-wave">
                                <div className="sk-rect sk-rect1 bg-gray-200"></div>
                                <div className="sk-rect sk-rect2 bg-gray-200"></div>
                                <div className="sk-rect sk-rect3 bg-gray-200"></div>
                                <div className="sk-rect sk-rect4 bg-gray-200"></div>
                                <div className="sk-rect sk-rect5 bg-gray-200"></div>
                            </div> : "Восстановить пароль"
                        }
                    </button>
                    <p className="mg-b-0">Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
                </div>

            </div>
        )
    }
}

export default ForgotPasswordForm;
