import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import Footer from '../footer/Footer';
import ScholarshipContestCompeteForm from '../forms/Test/ScholarshipContestCompeteForm';
import { submitScholarshipContest } from '../../actions/user';

class ScholarshipContestCompetePage extends Component {

    state = {
        pageTitle: 'Участвовать в конкурсе UStudy Стипендия'
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    submit = data => 
        this.props.submitScholarshipContest(data);

    render() {

        const { pageTitle } = this.state;

        return (
            <div>
                <Header />
                <TopNavigation />
                <div className="slim-mainpanel">
                    <div className="container">
                        <PageHeaderBlock pageTitle={pageTitle} />
                        <ScholarshipContestCompeteForm submit={this.submit}/>
                    </div>{/* container */}
                </div>{/* slim-mainpanel */}
                <Footer />
            </div>
        )
    }
}

export default connect(null, { submitScholarshipContest })(ScholarshipContestCompetePage);
