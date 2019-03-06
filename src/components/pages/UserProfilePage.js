import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import Footer from '../footer/Footer';
import UserProfileBlock from '../blocks/UserProfileBlock';

class UserProfilePage extends Component {

    state = {
        pageTitle: 'Профиль',
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    render() {

        const { pageTitle } = this.state;
        const {idn, email, userName} = this.props;
        return (
            <div>
                <Header />
                <TopNavigation />
                <div className="slim-mainpanel">
                    <div className="container">
                        <PageHeaderBlock pageTitle={pageTitle} />
                        <UserProfileBlock
                            idn={idn}
                            email={email}
                            userName={userName} />
                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: `${state.user.user.firstName} ${state.user.user.lastName}`,
        idn: state.user.user.idn,
        email: state.user.user.email,
    }
}

export default connect(mapStateToProps)(UserProfilePage);
