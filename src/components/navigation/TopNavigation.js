import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TopNavigation extends Component {

  render() {

    const { isAdmin } = this.props;

    return (
      <div className="slim-navbar" >
        <div className="container">
          <ul className="nav">
            <li className="nav-item with-sub">
              <a className="nav-link">
                <i className="icon ion-ios-home-outline"></i>
                <span>Конкурсы</span>
              </a>
              <div className="sub-item">
                <ul>
                  <li><Link to="/">UStudy Грант</Link></li>
                  <li><Link to="/contests/scholarship">UStudy Стипендия</Link></li>
                </ul>
              </div>{/* sub-item */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-to-pay">
                <i className="icon ion-plus-circled"></i>
                <span>Пополнить баланс</span>
              </Link>
            </li>
            <li className="nav-item with-sub">
              <a className="nav-link">
                <i className="icon ion-ios-compose"></i>
                <span>Тест</span>
              </a>
              <div className="sub-item">
                <ul>
                  <li><Link to="/test/order">Пройти пробное тестирование</Link></li>
                  <li><Link to="/user/orders">Результаты пробного тестирования</Link></li>
                </ul>
              </div>{/* sub-item */}
            </li>
            {
              isAdmin &&
              <li className="nav-item with-sub">
                <a className="nav-link">
                  <i className="icon ion-ios-personadd"></i>
                  <span>Admin</span>
                </a>
                <div className="sub-item">
                  <ul>
                    <li><Link to="/user/list">Список зарегистрированных пользователей </Link></li>
                    <li><Link to="/contests/scholarship/user-list">Список конкурсантов "UStudy Стипендия"</Link></li>
                  </ul>
                </div>{/* sub-item */}
              </li>
            }
          </ul>
        </div>{/* container */}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAdmin: !!state.user.user ? !!state.user.user.roles.find(role => role.name === 'admin') : false,
  }
}

export default connect(mapStateToProps)(TopNavigation);
