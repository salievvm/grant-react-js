import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, fetchUserBalance } from '../../actions/user';
import {Link} from 'react-router-dom';

class Header extends Component {

  state = {
    showLoggedUserNav: false
  }

  dropdownToggle = () => {
    const loggedUserNav = document.getElementById('loggedUserNav');
    if (!this.state.showLoggedUserNav) {
      loggedUserNav.classList.add('show');
      this.setState({ showLoggedUserNav: true });
    } else {
      loggedUserNav.classList.remove('show');
      this.setState({ showLoggedUserNav: false });
    }
  }

  logout = () => {
    this.props.logout();
  }

  componentWillMount() {
    this.props.fetchUserBalance().catch(() => console.log('err happened while trying to get UStudy balance'));
  }

  render() {

    const { userName, balance } = this.props;

    return (
      <div className="slim-header">
        <div className="container">
          <div className="slim-header-left">
            <h2 className="slim-logo">
              <Link to="/">
                <img src={require('../../images/logo.png')} className="img-fluid" alt="" width="30%" />
              </Link>
            </h2>
          </div>{/* slim-header-left */}
          <div className="slim-header-right">
          <div className="logged-user">
                        <i className="ion ion-card"></i>
                    <span>Баланс:<span className="inlineDisplay" id="loggedUserBalance">{balance}</span> тенге</span>
                </div>
            <div className="dropdown dropdown-c" onClick={this.dropdownToggle}>
              <a className="logged-user pointerCursor" data-toggle="dropdown">
                <img src={require('../../images/profile.png')} alt="" />
                <span>{userName}</span>
                <i className="fa fa-angle-down"></i>
              </a>
              <div id="loggedUserNav" className="dropdown-menu dropdown-menu-right">
                <nav className="nav">
                  <Link to="/user/profile" className="nav-link"><i className="icon ion-person"></i> Профиль</Link>
                  <a onClick={this.logout} className="nav-link"><i className="icon ion-forward"></i> Выйти</a>
                </nav>
              </div>{/* dropdown-menu */}
            </div>{/* dropdown */}
          </div>{/* header-right */}
        </div>{/* container */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state.user.balance,
    userName: `${state.user.user.firstName} ${state.user.user.lastName}`,
  }
}

export default connect(mapStateToProps, { logout, fetchUserBalance })(Header);
