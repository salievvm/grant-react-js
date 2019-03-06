import React, { Component } from 'react'
import { connect } from 'react-redux';
import {selectTestSelectiveModule} from '../../../actions/test';

class SelectiveModulesForm extends Component {

    state = {
        showModules: false,
        selectiveModulesCount: 0,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.test) {
            if (nextProps.test.testInfo.sel_mod_count > 0) {
                this.setState({ showModules: true, selectiveModulesCount: nextProps.test.testInfo.sel_mod_count });
            }
        }
    }

    onChange = e => {
        const data = {
            [e.target.name]: e.target.value
        }

        this.props.selectTestSelectiveModule(data);
    }

    render() {
        const { showModules, selectiveModulesCount } = this.state;
        const selectiveModules = [];

        for (let i = 0; i < selectiveModulesCount; i++) {
            const selectiveModuleName = `selectiveModule${i}`;
            const selectiveModule = (
                <div key={i} className="form-group mg-b-0 mg-md-l-20 mg-t-20 mg-md-t-0">
                    <label>Профильный предмет {i + 1}:
                        <span className="tx-danger">*</span>
                    </label>
                    <select
                        onChange={this.onChange}
                        name={selectiveModuleName}
                        className="form-control wd-250">
                        <option>Выберите профильный предмет {i + 1}</option>
                        {this.props.test.selectiveModules.map(selectiveModule => {
                            return (
                                <option
                                    key={selectiveModule.id}
                                    value={selectiveModule.id}>{selectiveModule.name}</option>
                            );
                        })}
                    </select>
                </div>
            );
            selectiveModules.push(selectiveModule);
        }

        return (
            <div className="inheritDisplay">
                {showModules && selectiveModules}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        test: state.test.test,
    }
}

export default connect(mapStateToProps, {selectTestSelectiveModule})(SelectiveModulesForm);
