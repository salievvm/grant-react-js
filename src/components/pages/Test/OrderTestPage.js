import React, { Component } from 'react'
import Header from '../../header/Header';
import TopNavigation from '../../navigation/TopNavigation';
import OrderTestBlock from '../../blocks/Test/OrderTestBlock';
import PageHeaderBlock from '../../blocks/PageHeaderBlock';
import Footer from '../../footer/Footer';
import { connect } from 'react-redux';
import OrderTestForm from '../../forms/Test/OrderTestForm';

class OrderTestPage extends Component {

    state = {
        pageTitle: 'Пройти пробное тестирование',
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    render() {

        const { pageTitle } = this.state;
        const { email, firstName, lastName } = this.props;

        return (
            <div>
                <Header />
                <TopNavigation />
                <div className="slim-mainpanel">
                    <div className="container">
                        <PageHeaderBlock pageTitle={pageTitle} />
                        <div className="card card-invoice">
                            <div className="card-body">
                                <OrderTestBlock
                                    email={email}
                                    firstName={firstName}
                                    lastName={lastName} />
                                <OrderTestForm history={this.props.history} />
                            </div>
                        </div>
                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.user.user.email,
        firstName: state.user.user.firstName,
        lastName: state.user.user.lastName
    }
}
export default connect(mapStateToProps)(OrderTestPage);
