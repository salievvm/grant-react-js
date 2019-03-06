import React, { Component } from 'react';
import Validator from 'validator';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

class RegisterForm extends Component {

    state = {
        data: {
            firstName: '',
            lastName: '',
            email: '',
            mobilePhone: '',
            password: '',
            rePassword: '',
            idn: '',
        },
        loading: false,
        errors: {},
        pageTitle: 'UStudy Стипендия, Грант - зарегистрируйтесь'
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
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
        if (!data.firstName) errors.firstName = 'Заполните обязательное поле Имя';
        if (!data.lastName) errors.lastName = 'Заполните обязательное поле Фамилия';
        if (!Validator.isEmail(data.email)) errors.email = 'Неправильный email';
        if (!(data.mobilePhone)) errors.mobilePhone = 'Неправильный Номер телефона';
        if (!data.password) errors.password = 'Заполните обязательное поле Пароль';
        if (!Validator.isByteLength(data.password, { min: 5, max: 250 })) errors.passwordMinLength = 'Пароль должен состоять из 5 символов';
        if (!data.rePassword) errors.rePassword = 'Заполните обязательное Подтвердите пароль';
        if (!Validator.equals(data.password, data.rePassword)) errors.confirmPassword = 'Пароли не совпадают';
        if (!Validator.isNumeric(data.idn)) errors.idn = 'Неправильный ИИН';
        return errors;
    }

    translateServerError = (error = null) => {
        const errors = {};
        if (!error) errors.global = 'Произошла ошибка, попробуйте позже';
        if (error && error.includes('users_email_uindex')) errors.global = 'Такой email уже зарегистрирован';
        if (error && error.includes('users_idn_uindex')) errors.global = 'Такой ИИН уже зарегистрирован';
        if (error && error.includes('idnchk')) errors.global = 'Неправильный ИИН';
        return errors;
    }

    render() {

        const { data, errors, loading } = this.state;

        return (
            <div className="signin-right">
                <div className="signin-box signup">
                    <h3 className="signin-title-primary">Регистрация</h3>
                    <h5 className="signin-title-secondary lh-4">Введите данные для того чтобы зарегистрироваться</h5>
                    {errors.global &&
                        <div>
                            <div className="alert alert-danger mg-b-0" role="alert">
                                {errors.global}
                            </div>
                            <br />
                        </div>
                    }
                    <div className="row row-xs mg-b-10">
                        <div className="col-sm">
                            <input
                                onChange={this.onChange}
                                type="text"
                                name="firstName"
                                value={data.firstName}
                                className="form-control"
                                placeholder="Имя" />
                            {errors.firstName &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.firstName}</li>
                                </ul>
                            }
                        </div>
                        <div className="col-sm mg-t-10 mg-sm-t-0">
                            <input
                                onChange={this.onChange}
                                type="text"
                                name="lastName"
                                value={data.lastName}
                                className="form-control"
                                placeholder="Фамилия" />
                            {errors.lastName &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.lastName}</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="row row-xs mg-b-10">
                        <div className="col-sm">
                            <input
                                onChange={this.onChange}
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                placeholder="Email" />
                            {errors.email &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.email}</li>
                                </ul>
                            }
                        </div>
                        <div className="col-sm">
                            <InputMask
                                onChange={this.onChange}
                                name="mobilePhone"
                                mask="+7 799 999 99 99"
                                value={data.mobilePhone}
                                className="form-control"
                                placeholder="Номер телефона"
                                maskChar="" />
                            {errors.mobilePhone &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.mobilePhone}</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="row row-xs mg-b-10">
                        <div className="col-sm mg-t-10 mg-sm-t-0">
                            <input
                                onChange={this.onChange}
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                placeholder="Пароль" />
                            {errors.password &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.password}</li>
                                </ul>
                            }
                            {errors.passwordMinLength &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.passwordMinLength}</li>
                                </ul>
                            }
                        </div>
                        <div className="col-sm mg-t-10 mg-sm-t-0">
                            <input
                                onChange={this.onChange}
                                type="password"
                                name="rePassword"
                                value={data.rePassword}
                                className="form-control"
                                placeholder="Подтвердите пароль" />
                            {errors.rePassword &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.rePassword}</li>
                                </ul>
                            }
                            {errors.confirmPassword &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.confirmPassword}</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="row row-xs mg-b-10">
                        <div className="col-sm">
                            <input
                                onChange={this.onChange}
                                type="text"
                                name="idn"
                                value={data.idn}
                                className="form-control"
                                placeholder="ИИН"
                                maxLength="12" />
                            {errors.idn &&
                                <ul className="parsley-errors-list filled">
                                    <li className="parsley-required">{errors.idn}</li>
                                </ul>
                            }
                        </div>
                    </div>

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
                            </div> : "Регистрация"
                        }
                    </button>
                    <p className="mg-t-40 mg-b-0">Уже зарегистрированы? &nbsp;
                    <Link to="/login">Войти</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default RegisterForm;
