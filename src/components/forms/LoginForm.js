import React, { Component } from 'react';
import Validator from 'validator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginForm extends Component {

    state = {
        data: {
            email: '',
            password: '',
        },
        loading: false,
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
                .submit(this.state.data)
                .catch((err) => {
                    const errors = !!err.response === true ? this.translateServerError(err.response.data.error) :
                        this.translateServerError()
                    this.setState({ errors });
                    this.setState({ loading: false });
                });
        }
    }

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = 'Неправильный email';
        if (!data.password) errors.password = 'Заполните обязательное поле Пароль';
        return errors;
    }

    translateServerError = (error = null) => {
        const errors = {};
        if (!error) errors.global = 'Произошла ошибка, попробуйте позже';
        if (error) errors.global = 'Неправильный email или пароль';
        return errors;
    }

    render() {

        const { data, errors, loading } = this.state;
        const { justRegistered, recovedPasswordTokenValidated } = this.props;

        return (
            <div className="signin-right">

                <div className="signin-box">
                    <h2 className="signin-title-primary">Добро пожаловать!</h2>
                    <h3 className="signin-title-secondary">Войти в личный кабинет</h3>
                    {errors.global &&
                        <div>
                            <div className="alert alert-danger mg-b-0" role="alert">
                                {errors.global}
                            </div>
                            <br />
                        </div>
                    }

                    {justRegistered &&
                        <div>
                            <div className="alert alert-success mg-b-0" role="alert">
                                Введите email/пароль чтобы войти в аккаунт
                            </div>
                            <br />
                        </div>
                    }
                    {recovedPasswordTokenValidated &&
                        <div>
                            <div className="alert alert-success mg-b-0" role="alert">
                                Введите email/пароль чтобы войти в аккаунт
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
                    <div className="form-group mg-b-50">
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={this.onChange}
                            className={errors.password ? "form-control parsley-error" : "form-control"}
                            placeholder="Пароль" />
                        {errors.password &&
                            <ul className="parsley-errors-list filled">
                                <li className="parsley-required">{errors.password}</li>
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
                            </div> : "Войти"
                        }
                    </button>
                    <p className="mg-b-0">Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
                    <p className="mg-b-0">Забыли пароль? <Link to="/user/forgot-password">Восстановить пароль</Link></p>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        justRegistered: state.user.justRegistered,
        recovedPasswordTokenValidated: !!state.user.recovedPasswordTokenValidated
    }
}

export default connect(mapStateToProps)(LoginForm);
