import React, { Component } from 'react'
import Header from '../header/Header';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import Footer from '../footer/Footer';
import UsersListBlock from '../blocks/UsersListBlock';
import { fetchUsersList } from '../../actions/user';
import { connect } from 'react-redux';

class UsersListPage extends Component {

    state = {
        pageTitle: 'Список зарегистрированных пользователей',
        success: true,
        loading: true,
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    componentWillMount() {
        this.props.fetchUsersList().catch(() => this.setState({ success: false, loading: false }))
    }

    render() {

        const { pageTitle, success } = this.state;

        return (
            <div>
                <Header />
                <TopNavigation />
                <div className="slim-mainpanel">
                    <div className="container">
                        <PageHeaderBlock pageTitle={pageTitle} />
                        {success ? <UsersListBlock /> :
                            <div className="alert alert-danger mg-b-0" role="alert">
                                Произошла ошибка, попробуйте позже
                            </div>
                        }

                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

export default connect(null, { fetchUsersList })(UsersListPage);
