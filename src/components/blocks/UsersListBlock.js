import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class UsersListBlock extends Component {

    state = {
        users: [],
        loading: true,
        success: false
    }

    componentWillMount() {
        require('moment/locale/ru.js');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users) this.setState({ users: nextProps.users, loading: false, success: true });
    }

    render() {

        const { users, loading, success } = this.state;
        return (
            <div className="section-wrapper">


                {loading &&
                    <div className="col-md-12 mg-t-30">
                        <div className="d-flex bg-gray-200 ht-300 pos-relative align-items-center">
                            <div className="sk-chasing-dots">
                                <div className="sk-child sk-dot1 bg-gray-800"></div>
                                <div className="sk-child sk-dot2 bg-gray-800"></div>
                            </div>
                        </div>
                    </div>
                }
                {
                    success &&
                    <div>
                        <div className="table-responsive">
                            <table className="table mg-b-0">
                                <thead>
                                    <tr>
                                        <th>ИИН</th>
                                        <th>ФИО</th>
                                        <th>Дата рождения</th>
                                        <th>Пол</th>
                                        <th>Номер телефона</th>
                                        <th>Email</th>
                                        <th>Время регистрации</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!loading && success &&
                                        users.map(user =>
                                            <tr key={user.id}>
                                                <th scope="row">{user.idn}</th>
                                                <td>{user.lastName} {user.firstName}</td>
                                                <td>{moment(user.userInfo.birthDate.Time).format('ll')}</td>
                                                <td>{user.userInfo.gender.String}</td>
                                                <td>{user.userInfo.mobilePhone.Int64}</td>
                                                <td>{user.email}</td>
                                                <td>{moment(user.createdAt).format('llll')}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

export default connect(mapStateToProps)(UsersListBlock);
