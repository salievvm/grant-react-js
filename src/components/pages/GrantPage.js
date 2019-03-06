import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import GrantBlock from '../blocks/GrantBlock';

class GrantPage extends Component {

  state = {
    pageTitle: 'Информация о конкурсе "UStudy Грант"',
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
            <GrantBlock/>
          </div>{/* container */}
        </div>{/* slim-mainpanel */}
        <Footer />
      </div>
    )
  }

}

export default GrantPage;
