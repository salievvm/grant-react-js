import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TopNavigation from '../navigation/TopNavigation';
import ScholarshipBlock from '../blocks/ScholarshipBlock';
import PageHeaderBlock from '../blocks/PageHeaderBlock';

class ScholarshipPage extends Component {

  state = {
    pageTitle: 'Информация о конкурсе "UStudy Стипендия"',
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
            <PageHeaderBlock pageTitle={pageTitle}/>
            <ScholarshipBlock/>
          </div>{/* container */}
        </div>{/* slim-mainpanel */}
        <Footer />
      </div>
    )
  }

}

export default ScholarshipPage;
