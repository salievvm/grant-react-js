import React, { Component } from 'react';
import UserOrdersBlock from '../blocks/UserOrdersBlock';
import Header from '../header/Header';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import Footer from '../footer/Footer';

class UserOrdersPage extends Component {

    state = {
        pageTitle: 'История покупок',
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    render() {

        const { pageTitle } = this.state;

        return (
            <div>
                <Header />
                <TopNavigation />
                <div className="slim-mainpanel">
                    <div className="container">
                        <PageHeaderBlock pageTitle={pageTitle} />
                        <UserOrdersBlock/>
                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

export default UserOrdersPage;
