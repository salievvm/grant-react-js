import React, { Component } from 'react'
import Header from '../header/Header';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import Footer from '../footer/Footer';
import UserCompetitionListsBlock from '../blocks/UserCompetitionListsBlock';

class UserCompetitionListsPage extends Component {

    state = {
        pageTitle: 'Список конкурсантов "UStudy Стипендия"',
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
                        <UserCompetitionListsBlock/>
                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

export default UserCompetitionListsPage;
