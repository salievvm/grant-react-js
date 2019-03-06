import React, { Component } from 'react';
import Header from '../../header/Header';
import TopNavigation from '../../navigation/TopNavigation';
import Footer from '../../footer/Footer';
import PageHeaderBlock from '../../blocks/PageHeaderBlock';
import TestResultBlock from '../../blocks/Test/TestResultBlock';
import api from '../../../api';

class TestResultPage extends Component {

    state = {
        result: {},
        success: false,
        loading: true,
        pageTitle: 'Результаты пробного тестирования',
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
        const { orderId } = this.props.match.params;
        api.test.result(orderId).then(result => this.setState({
            ...result,
            success: true,
            loading: false
        }));
    }

    render() {

        const { pageTitle, result, success, loading } = this.state;
        const { orderId } = this.props.match.params;

        return (
            <div>
                <Header />
                <TopNavigation />
                <div className="slim-mainpanel">
                    <div className="container">
                        <PageHeaderBlock pageTitle={pageTitle} />
                        {loading &&
                            <div className="col-md-12 col-xl-12 mg-t-30">
                                <div className="d-flex bg-gray-200 ht-300 pos-relative align-items-center">
                                    <div className="sk-chasing-dots">
                                        <div className="sk-child sk-dot1 bg-gray-800"></div>
                                        <div className="sk-child sk-dot2 bg-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                        }
                        {!result.moduleResults && !loading &&
                            <div className="alert alert-warning" role="alert">
                                <strong>Ошибка!</strong> Результат является неактивным.
                            </div>
                        }
                        {!loading && success && !!result.moduleResults && 
                            <TestResultBlock 
                                orderId={orderId}
                                result={result} />}
                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

export default TestResultPage;
