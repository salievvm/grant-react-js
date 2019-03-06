import React, { Component } from 'react'
import api from '../../../api';
import Validator from 'validator';
import { connect } from 'react-redux';
import { chooseTestLanguage, getTestByLanguage, orderTest, startTest } from '../../../actions/test';
import SelectiveModulesForm from './SelectiveModulesForm';
import '../../../styles/spinkit.css';

class OrderTestForm extends Component {

    state = {
        loading: false,
        errors: {}
    }

    onLanguageChoice = e => {
        const chosenLanguageId = e.target.value;
        const errors = this.validateChosenLanguage(chosenLanguageId);
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            api.language.get(chosenLanguageId)
                .then(res => {
                    this.props.chooseTestLanguage(res);
                    this.props.getTestByLanguage(this.props.language);
                })
                .catch(err => {
                    const errors = {};
                    errors.language = 'Выбранный язык не поддерживается';
                    this.setState({ errors })
                })
            this.setState({ loading: false });
        }
    }

    validateChosenLanguage = id => {
        const errors = {};
        if (!Validator.isNumeric(id)) errors.language = 'Выберите язык тестирования';
        return errors;
    }

    validateOrderForm = (selectedModuleIds) => {
        const errors = {};
        if (!this.props.test.test) {
            errors.global = 'Выберите язык тестирования';
        } else if (selectedModuleIds.length !== this.props.test.test.testInfo.sel_mod_count) {
            errors.global = 'Выберите профильные предметы';
        }
        return errors;
    }

    onSubmit = () => {
        let selectedModuleIds = [];
        if (!!this.props.test.selectedModuleIds) {
            selectedModuleIds = Object.values(this.props.test.selectedModuleIds);
            selectedModuleIds = selectedModuleIds.map(selectedModuleId => {
                return parseInt(selectedModuleId, 10)
            });
        }
        const errors = this.validateOrderForm(selectedModuleIds);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            const data = {
                testId: this.props.test.test.id,
                selectiveModuleIds: selectedModuleIds,
            }
            this.props.orderTest(data)
                .then(() => {
                    this.props.startTest().then(() => this.props.history.push('/test/process'));
                })
                .catch(() => {
                    const errors = {};
                    errors.global = 'Невозможно пройти тест, так как не хватает денежных средств';
                    this.setState({ errors });
                    this.setState({ loading: false });
                });
        }
    }

    render() {

        const { errors, loading } = this.state;

        return (
            <div className="wd-300">

                {errors.global &&
                    <div>
                        <div className="alert alert-danger mg-b-0" role="alert">
                            {errors.global}
                        </div>
                        <br />
                    </div>
                }

                <div className="d-md-flex mg-b-30">
                    <div className="form-group mg-b-0">
                        <label>Язык тестирования:
                            <span className="tx-danger">*</span>
                        </label>
                        <select
                            id="language"
                            name="language"
                            onChange={this.onLanguageChoice}
                            className="form-control wd-250">
                            <option>Выберите язык тестирования</option>
                            <option value="1">Казахский язык</option>
                            <option value="2">Русский язык</option>
                        </select>
                        {errors.language &&
                            <ul className="parsley-errors-list filled">
                                <li className="parsley-required">{errors.language}</li>
                            </ul>
                        }
                    </div>{/* form-group */}
                    <SelectiveModulesForm />
                </div>{/* d-flex */}
                <button
                    disabled={loading}
                    onClick={this.onSubmit}
                    type="submit"
                    className="btn btn-primary btn-block">
                    { loading ?
                        <div className="sk-wave">
                            <div className="sk-rect sk-rect1 bg-gray-200"></div>
                            <div className="sk-rect sk-rect2 bg-gray-200"></div>
                            <div className="sk-rect sk-rect3 bg-gray-200"></div>
                            <div className="sk-rect sk-rect4 bg-gray-200"></div>
                            <div className="sk-rect sk-rect5 bg-gray-200"></div>
                        </div> : "Пройти тест"
                    }
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.test.language,
        test: state.test
    }
}

export default connect(mapStateToProps, { chooseTestLanguage, getTestByLanguage, orderTest, startTest })(OrderTestForm);
