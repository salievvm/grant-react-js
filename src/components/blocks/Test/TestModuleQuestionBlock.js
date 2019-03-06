import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestModuleQuestionAnswersForm from '../../forms/Test/TestModuleQuestionAnswersForm';

class TestModuleQuestionBlock extends Component {

    updateImgSrc = text =>
        text.split('src="').join('src="http://matrix.ustudy.kz')

    render() {

        const { question } = this.props;

        const { parentQuestion } = question.question;

        return (
            <div>
                {!!parentQuestion &&
                    <div className="row">
                        <div
                            className="col-md-12"
                            dangerouslySetInnerHTML={{ __html: this.updateImgSrc(parentQuestion.body) }}>
                        </div>
                        <br/>
                        <i>Вопрос:</i>
                    </div>
                }
                <div className="row">
                    <div
                        className="col-md-12"
                        dangerouslySetInnerHTML={{ __html: this.updateImgSrc(question.question.body) }}>
                    </div>
                </div>
                <TestModuleQuestionAnswersForm
                    questionType={question.question.type}
                    userVariantId={question.userVariantId}
                    answers={question.question.answers}
                    updateImgSrc={this.updateImgSrc} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: state.test.displayedQuestion
    }
}

export default connect(mapStateToProps)(TestModuleQuestionBlock);
