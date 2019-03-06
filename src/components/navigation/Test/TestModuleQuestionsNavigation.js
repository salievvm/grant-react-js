import React, { Component } from 'react';
import {connect} from 'react-redux';
import {displayTestModuleQuestion} from '../../../actions/test';

class TestModuleQuestionsNavigation extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        this.setState({loaded: true});
    }

    onClick = question => {
        this.props.displayTestModuleQuestion(question)
    }

    isActive = id => {
        if(this.state.loaded) {
            return this.props.displayedQuestion.userVariantId === id?true:false
        }
        return false;
    }

    isAnswered = id => {
        const {userAnswers} = this.props;
        if(!userAnswers) return false;
        let answered = false;
        userAnswers.map(userAnswer => {
            if(userAnswer.userVariantId === id) {
                answered = true;
            }
            return userAnswer;
        })
        return answered;
    }

    render() {

        const {activeTestModule} = this.props;

        return (
            <nav aria-label="Page navigation">
                <ul className="pagination mg-b-0 blockDisplay customQuestionsNav">
                    {activeTestModule.questions.map((question, i) => 
                        <li 
                            onClick={() => this.onClick(question)}
                            key={question.userVariantId}
                            className="page-item inlineDisplay">
                                <a 
                                    key={i} 
                                    className={"page-link " + (this.isAnswered(question.userVariantId)?"answeredVariant ":"") + (this.isActive(question.userVariantId)?"activeModule ":"")}>
                                {i + 1}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeTestModule: state.test.activeTestModule,
        displayedQuestion: state.test.displayedQuestion,
        userAnswers: state.test.userAnswers
    }
}

export default connect(mapStateToProps, {displayTestModuleQuestion})(TestModuleQuestionsNavigation);
