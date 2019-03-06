import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkTestModuleQuestionAnswer, removeUserVariantAnswer, sliceAnswerFromUserAnswers } from '../../../actions/test';

class TestModuleQuestionAnswersForm extends Component {

    onChange = e => {
        const { id } = e.target;
        const userVariantId = parseInt(e.target.attributes.getNamedItem('uservariantid').value, 10);
        const selectiveAnswersCount = parseInt(e.target.attributes.getNamedItem('selectiveanswerscount').value, 10);
        const userAnswer = {
            userVariantId,
            answerIds: [parseInt(id, 10)]
        }
        if(selectiveAnswersCount === 1) {
            this.props.removeUserVariantAnswer(userVariantId);
            this.props.checkTestModuleQuestionAnswer(userAnswer);
        } else {
            if(e.target.checked) {
                this.props.checkTestModuleQuestionAnswer(userAnswer);
            } else {
                this.props.sliceAnswerFromUserAnswers(userVariantId, parseInt(id, 10));
            }
        }

    }

    isChecked = (userVariantId, answerId) => {
        if (!this.props.userAnswers) return false;
        let isChecked = false;

        this.props.userAnswers.map(userAnswer => {
            if (userAnswer.userVariantId === userVariantId) {
                userAnswer.answerIds.map(id => {
                    if (answerId === id) {
                        isChecked = true;
                    }
                    return id;
                })
            }
            return userAnswer;
        })

        return isChecked;
    }

    render() {

        const { answers, updateImgSrc, userVariantId, questionType } = this.props;

        const answerInput = answer => {
            const selectiveAnswersCount = questionType.questionTypeSelectiveAnswers.selectiveAnswersCount;
            if (selectiveAnswersCount === 1) {
                return (
                    <label 
                        key={answer.id}
                        className="rdiobox blockDisplay">
                        <input 
                            uservariantid={userVariantId}
                            selectiveanswerscount={selectiveAnswersCount}
                            id={answer.id}
                            onChange={this.onChange}
                            name="rdio" 
                            type="radio" 
                            className="inlineDisplay"
                            defaultChecked={this.isChecked(userVariantId, answer.id)}/>
                        <span className="inlineDisplay" dangerouslySetInnerHTML={{ __html: updateImgSrc(answer.body) }}></span>
                    </label>
                );
            } else {
                return (
                    <label
                        key={answer.id}
                        className="ckbox blockDisplay">
                        <input
                            uservariantid={userVariantId}
                            selectiveanswerscount={selectiveAnswersCount}
                            id={answer.id}
                            onChange={this.onChange}
                            type="checkbox"
                            className="inlineDisplay"
                            defaultChecked={this.isChecked(userVariantId, answer.id)} />
                            <span className="inlineDisplay" dangerouslySetInnerHTML={{ __html: updateImgSrc(answer.body) }}></span>
                    </label>
                );
            }
        }


        return (
            <div className="row">
                <div className="col-md-12">
                    {answers.map((answer) =>
                        answerInput(answer)
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userAnswers: state.test.userAnswers
    }
}

export default connect(mapStateToProps, { checkTestModuleQuestionAnswer, removeUserVariantAnswer, sliceAnswerFromUserAnswers })(TestModuleQuestionAnswersForm);
