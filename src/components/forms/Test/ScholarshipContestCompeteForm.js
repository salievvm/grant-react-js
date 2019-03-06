import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../../api';
import Validator from 'validator';
import moment from 'moment';
import { AVAILABLE_TEST_CENTER_IDS, SCHOLARSHIP_PARTICIPATION_TIMES } from '../../../constants';

class ScholarshipContestCompeteForm extends Component {

    state = {
        data: {
            idn: this.props.user.idn,
            centerId: '',
            languageId: '',
            testDateTime: ''
        },
        availableTestCenters: [],
        errors: {},
        loading: false,
        success: false,
    }

    componentWillMount() {
        require('moment/locale/ru.js');
    }

    componentDidMount() {
        api.test.centers().then(testCenters => testCenters.map(testCenter => {
            AVAILABLE_TEST_CENTER_IDS.map(testCenterId => {
                if (testCenterId === parseInt(testCenter.tb9906_id, 10)) {
                    this.setState(prevState => ({
                        availableTestCenters: [...prevState.availableTestCenters, testCenter]
                    }));
                }
                return testCenterId;
            });
            return testCenter;
        })).catch(() => {
            const errors = {};
            errors.global = 'Произошла ошибка, повторите попытку позже';
            this.setState({ errors });
        })
    }

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    validate = data => {
        const errors = {};
        if (!Validator.isNumeric(data.centerId)) errors.centerId = 'Выберите центр';
        if (!Validator.isNumeric(data.languageId)) errors.languageId = 'Выберите язык';
        if (Validator.isEmpty(data.testDateTime)) errors.testDateTime = 'Выберите время';
        return errors;
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .then(() => this.setState({success: true, loading: false}))
                .catch((err) => {
                    const errors = !!err.response === true ? this.translateServerError(err.response.data.error) :
                        this.translateServerError()
                    this.setState({ errors });
                    this.setState({ loading: false, success: false });
                });
        }
    }

    translateServerError = (error = null) => {
        const errors = {};
        if (!error) errors.global = 'Произошла ошибка, попробуйте позже';
        if (error) errors.global = 'К сожалению, вы не можете участвовать в конкурсе';
        return errors;
    }

    render() {

        const { user } = this.props;
        const { availableTestCenters, loading, errors, success } = this.state;

        return (
            <div className="section-wrapper mg-t-20">
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
                            Вы успешно отправили заявку на конкурс. Наш менеджер свяжется с вами.
                        </div>
                        <br />
                    </div>
                }
                <label className="section-title">Центр и время тестирования</label>
                <p className="mg-b-20 mg-sm-b-40">Выберите центр и время тестирования</p>

                <div className="form-layout form-layout-2">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="form-control-label">Имя:
                            <span className="tx-danger">*</span>
                                </label>
                                <input className="form-control" type="text" value={user.firstName} name="firstname" disabled />
                            </div>
                        </div>
                        <div className="col-md-4 mg-t--1 mg-md-t-0">
                            <div className="form-group mg-md-l--1">
                                <label className="form-control-label">Фамилия:
                            <span className="tx-danger">*</span>
                                </label>
                                <input className="form-control" type="text" value={user.lastName} name="lastname" disabled />
                            </div>
                        </div>
                        <div className="col-md-4 mg-t--1 mg-md-t-0">
                            <div className="form-group mg-md-l--1">
                                <label className="form-control-label">ИИН:
                            <span className="tx-danger">*</span>
                                </label>
                                <input className="form-control" type="text" value={user.idn} name="idn" disabled />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mg-md-l--1 bd-t-0-force">
                                <label className="form-control-label mg-b-0-force">Центр:
                            <span className="tx-danger">*</span>
                                </label>
                                <select
                                    onChange={this.onChange}
                                    name="centerId"
                                    className="form-control">
                                    <option>Выберите центр</option>
                                    {availableTestCenters.map(testCenter =>
                                        <option key={testCenter.tb9906_id}
                                            value={testCenter.tb9906_id}>{testCenter.tb0013_name_ru}, {testCenter.tb9906_addr_ru}
                                        </option>)}
                                </select>
                                {errors.centerId &&
                                    <ul className="parsley-errors-list filled">
                                        <li className="parsley-required">{errors.centerId}</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mg-md-l--1 bd-t-0-force">
                                <label className="form-control-label mg-b-0-force">Язык тестирования:
                            <span className="tx-danger">*</span>
                                </label>
                                <select
                                    onChange={this.onChange}
                                    name="languageId"
                                    className="form-control">
                                    <option>Выберите язык</option>
                                    <option value="1">Казахский язык</option>
                                    <option value="2">Русский язык</option>
                                </select>
                                {errors.languageId &&
                                    <ul className="parsley-errors-list filled">
                                        <li className="parsley-required">{errors.languageId}</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group bd-t-0-force">
                                <label className="form-control-label mg-b-0-force">Время:
                            <span className="tx-danger">*</span>
                                </label>
                                <select
                                    onChange={this.onChange}
                                    name="testDateTime"
                                    className="form-control">
                                    <option>Выберите время</option>
                                    {SCHOLARSHIP_PARTICIPATION_TIMES.map(time =>
                                        <option
                                            key={time}
                                            value={moment(time).format()}>{moment(time).format('llll')}</option>)}
                                </select>
                                {errors.testDateTime &&
                                    <ul className="parsley-errors-list filled">
                                        <li className="parsley-required">{errors.testDateTime}</li>
                                    </ul>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="form-layout-footer bd pd-20 bd-t-0">

                        <button
                            disabled={loading}
                            onClick={this.onSubmit}
                            type="submit"
                            className="btn btn-primary bd-0">
                            {loading ?
                                <div className="sk-wave">
                                    <div className="sk-rect sk-rect1 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect2 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect3 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect4 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect5 bg-gray-200"></div>
                                </div> : "Участвовать в конкурсе"
                            }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(ScholarshipContestCompeteForm);