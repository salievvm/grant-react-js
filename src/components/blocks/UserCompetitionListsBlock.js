import React, { Component } from 'react';
import api from '../../api';
import moment from 'moment';

class UserCompetitionListsBlock extends Component {

    state = {
        competitionLists: [],
        success: false,
        loading: true,
        errors: {}
    }

    componentWillMount() {
        require('moment/locale/ru.js');
    }

    componentDidMount() {
        api.user.competitionLists()
            .then(competitionLists => this.setState({ competitionLists, success: competitionLists !== null?true:false, loading: false }))
            .catch(err => {
                const errors = {};
                errors.global = 'Список пуст';
                this.setState({ errors, loading: false, success: false });
            })
    }

    render() {

        const { loading, errors, success, competitionLists } = this.state;

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
                    errors.global &&
                    <div className="alert alert-warning" role="alert">
                        {errors.global}
                    </div>
                }

                {
                    !success &&
                    <div className="alert alert-warning" role="alert">
                        Список пуст
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
                                        <th>Номер телефона</th>
                                        <th>Email</th>
                                        <th>Номер центра</th>
                                        <th>Время сессий</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {success &&
                                        competitionLists.map(competitionList =>
                                            <tr key={competitionList.user.id}>
                                                <th scope="row">{competitionList.user.idn}</th>
                                                <td>{competitionList.user.lastName} {competitionList.user.firstName}</td>
                                                <td>{competitionList.user.userInfo.mobilePhone.Int64}</td>
                                                <td>{competitionList.user.email}</td>
                                                <td>{competitionList.competitionOrder.centerId}</td>
                                                <td>{moment(competitionList.competitionOrder.testDateTime).format('llll')}</td>
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

export default UserCompetitionListsBlock;
