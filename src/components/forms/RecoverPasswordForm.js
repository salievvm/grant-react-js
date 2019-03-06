import React, { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';

class RecoverPasswordForm extends Component {

    state = {
        data: {
            password: '',
            rePassword: '',
        },
        errors: {},
        loading: false
    }

    onChange = e => {
        this.setState({
            data: {
                ...this.state.data, [e.target.name]: e.target.value
            }
        });
    }

    validate = data => {
        const errors = {};
        if (!data.password) errors.password = 'Заполните обязательное поле Пароль';
        if (!Validator.isByteLength(data.password, { min: 5, max: 250 })) errors.passwordMinLength = 'Пароль должен состоять из 5 символов';
        if (!data.rePassword) errors.rePassword = 'Заполните обязательное Повторите пароль';
        if (!Validator.equals(data.password, data.rePassword)) errors.confirmPassword = 'Пароли не совпадают';

        return errors;
    }

    onSubmit = () => {

        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.submit(this.state.data);
        }
    }

    render() {

        const { email } = this.props;
        const { data, errors, loading } = this.state;

        return (
            <div>
                <div className="form-group">
                    <input type="email" className="form-control" value={email} disabled={true} />
                </div>
                <div className="form-group">
                    <input
                        onChange={this.onChange}
                        value={data.password}
                        name="password"
                        type="password"
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
                <div className="form-group mg-b-50">
                    <input
                        onChange={this.onChange}
                        value={data.rePassword}
                        name="rePassword"
                        type="password"
                        className="form-control"
                        placeholder="Повторите пароль" />
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.user.emailForPasswordRecover,
    }
}

export default connect(mapStateToProps)(RecoverPasswordForm);
