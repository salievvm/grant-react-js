import React, { Component } from 'react'
import TestModulesBlock from './TestModulesBlock';
import TestModuleQuestionsForm from '../../forms/Test/TestModuleQuestionsForm';
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux';
import { finishTest } from '../../../actions/test';
import { userWantsToFinishTheTest } from '../../../actions/user';
import swal from 'sweetalert';
class TestProcessBlock extends Component {

    state = {
        finished: false,
        loading: false,
        errors: {},
    }

    onSubmit = () => {
        swal({
            title: "Вы уверены?",
            text: "Вы собираетесь завершить тестирование",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((finishTest) => {
                if (finishTest) {
                    this.props.userWantsToFinishTheTest();
                    this.finishTest();
                }
            });
    }

    finishTest = () => {
        this.setState({ loading: true });
        const data = {
            orderId: this.props.orderId,
            userAnswers: this.props.userAnswers
        }
        this.props.finishTest(data)
            .then(res => this.props.history.push(`/test/result/${res.finishedTestResult.result.order.id}`))
            .catch(() => {
                const errors = {};
                errors.global = 'Произошла ошибка во время отправки ответов на сервер, попробуйте еще раз';
                this.setState({ errors });
                this.setState({ loading: false });
            });
    }

    render() {

        const { loading, errors } = this.state;
        const { testDuration } = this.props;

        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                this.finishTest();
            } else {
                return <span>{hours}:{minutes}:{seconds}</span>;
            }
        };

        return (
            <div>
                <div className="row row-sm">
                    <div className="col-lg-12">
                        <TestModulesBlock />
                        <TestModuleQuestionsForm />
                    </div>
                </div>
                <br />
                {errors.global &&
                    <div>
                        <div className="alert alert-danger mg-b-0" role="alert">
                            {errors.global}
                        </div>
                        <br />
                    </div>
                }
                <div className="row row-sm">
                    <div className="col-md-4">
                        <h6 className="slim-pagetitle">Оставшееся время:&nbsp;
                            <Countdown
                                renderer={renderer}
                                date={Date.now() + testDuration * 60 * 1000} />
                        </h6>
                    </div>
                    <div className="col-md-8">
                        <button
                            disabled={loading}
                            onClick={this.onSubmit}
                            type="submit"
                            className="btn btn-primary btn-block">
                            {loading ?
                                <div className="sk-wave">
                                    <div className="sk-rect sk-rect1 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect2 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect3 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect4 bg-gray-200"></div>
                                    <div className="sk-rect sk-rect5 bg-gray-200"></div>
                                </div> : "Завершить тестирования"
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
        testDuration: state.test.test.testInfo.duration,
        userAnswers: state.test.userAnswers,
        orderId: state.test.orderId
    }
}

export default connect(mapStateToProps, { finishTest, userWantsToFinishTheTest })(TestProcessBlock);
