import React, { Component } from 'react';
import { connect } from 'react-redux';
import {activateTestModule, displayTestModuleQuestion} from '../../../actions/test';

class TestModulesForm extends Component {

    state = {
        loaded: false
    }

    componentWillMount() {
        this.props.activateTestModule(this.props.testModules[0]);
        this.props.displayTestModuleQuestion(this.props.testModules[0].questions[0]);
    }

    componentDidMount() {
        this.setState({loaded: true});
    }

    onClick = testModule => {
        this.props.activateTestModule(testModule);
        this.props.displayTestModuleQuestion(testModule.questions[0]);
    }

    isActive = id => {
        if(this.state.loaded) {
            return this.props.activeTestModule.id === id?true:false
        }
        return false;
    }
    
    render() {

        const {testModules} = this.props;

        return (
            <ul className="nav nav-activity-profile mg-t-20">
                {testModules.map(testModule => 
                <li 
                    key={testModule.id} 
                    className="nav-item"
                    onClick={() => this.onClick(testModule)}>
                    <a className={this.isActive(testModule.id)?"nav-link activeModule":"nav-link"}>
                    <i className="icon ion-document-text tx-success"></i> {testModule.name}</a>
                </li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        testModules: state.test.generatedTest.modules,
        activeTestModule: state.test.activeTestModule,
    }
}

export default connect(mapStateToProps, {activateTestModule, displayTestModuleQuestion})(TestModulesForm);
