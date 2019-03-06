import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import PageHeaderBlock from '../../blocks/PageHeaderBlock';
import TopNavigation from '../../navigation/TopNavigation';
import TestProcessBlock from '../../blocks/Test/TestProcessBlock';
import { Redirect } from "react-router-dom";

class TestProcessPage extends Component {

  state = {
    pageTitle: 'Пробное тестирование',
  }

  componentWillUnmount() {
    const { inTestProcess } = this.props;
    if (!inTestProcess) {
      this.unblock()();
      window.onbeforeunload = null;
    }
    
  }

  unblock = () =>
    this.props.history.block('Вы еще не завершили тестирование, хотите все равно выйти из теста?');

  componentDidMount() {
    document.title = this.state.pageTitle;
    const { inTestProcess } = this.props;
    if (inTestProcess) this.unblock();
    if (inTestProcess) window.onbeforeunload = () => 'Вы еще не завершили тестирование, хотите все равно выйти из теста?';
  }

  render() {

    const { pageTitle } = this.state;
    const { inTestProcess } = this.props;

    return (
      <div>
        {inTestProcess ?
          <div>
            <Header />
            <TopNavigation />
            <div className="slim-mainpanel">
              <div className="container">
                <PageHeaderBlock pageTitle={pageTitle} />
                <TestProcessBlock history={this.props.history} />
              </div>
            </div>
            <Footer />
          </div> : <Redirect to="/test/order" />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inTestProcess: state.test.inTestProcess,
    userWantedToFinishTheTest: state.user.userWantedToFinishTheTest,
  }
}

export default connect(mapStateToProps)(TestProcessPage);


