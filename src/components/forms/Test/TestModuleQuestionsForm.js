import React, { Component } from 'react'
import TestModuleQuestionsNavigation from '../../navigation/Test/TestModuleQuestionsNavigation';
import TestModuleQuestionBlock from '../../blocks/Test/TestModuleQuestionBlock';

class TestModuleQuestionsForm extends Component {
    render() {
        return (
            <div className="section-wrapper">
                <TestModuleQuestionsNavigation />
                <br/>
                <TestModuleQuestionBlock/>
            </div>
        )
    }
}

export default TestModuleQuestionsForm;
