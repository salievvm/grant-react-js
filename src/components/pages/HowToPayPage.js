import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TopNavigation from '../navigation/TopNavigation';
import PageHeaderBlock from '../blocks/PageHeaderBlock';
import HowToPayBlock from '../blocks/HowToPayBlock';

class HowToPayPage extends Component {

  state = {
    pageTitle: 'Как пополнить баланс через Qiwi Терминал',
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
            <HowToPayBlock/>
          </div>{/* container */}
        </div>{/* slim-mainpanel */}
        <Footer />
      </div>
    )
  }

}

export default HowToPayPage;
