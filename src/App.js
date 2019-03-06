import React from 'react';
import ScholarshipPage from './components/pages/ScholarshipPage';
import './App.css';
import './styles/Ionicons/css/ionicons.css';
import './styles/font-awesome/css/font-awesome.css';
import GrantPage from './components/pages/GrantPage';
import HowToPayPage from './components/pages/HowToPayPage';
import LoginPage from './components/pages/LoginPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import OrderTestPage from './components/pages/Test/OrderTestPage';
import TestProcessPage from './components/pages/Test/TestProcessPage';
import { Switch } from 'react-router-dom';
import UserOrdersPage from './components/pages/UserOrdersPage';
import TestResultPage from './components/pages/Test/TestResultPage';
import RegisterPage from './components/pages/RegisterPage';
import UserProfilePage from './components/pages/UserProfilePage';
import AboutPage from './components/pages/AboutPage';
import { Route } from 'react-router-dom';
import NotFoundPage from './components/pages/NotFoundPage';
import RecoverPasswordPage from './components/pages/RecoverPasswordPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import AdminRoute from './components/routes/AdminRoute';
import UsersListPage from './components/pages/UsersListPage';
import ScholarshipContestCompetePage from './components/pages/ScholarshipContestCompetePage';
import UserCompetitionListsPage from './components/pages/UserCompetitionListsPage';

const App = ({ location }) => {

  return (
    <Switch>
      <Route
        component={AboutPage}
        location={location}
        exact
        path='/about' />
      <UserRoute
        location={location}
        exact
        path='/'
        component={GrantPage} />
      <UserRoute
        location={location}
        exact
        path='/contests/scholarship'
        component={ScholarshipPage} />
      <UserRoute
        location={location}
        exact
        path='/how-to-pay'
        component={HowToPayPage} />
      <UserRoute
        location={location}
        exact
        path='/test/order'
        component={OrderTestPage} />
      <UserRoute
        location={location}
        exact
        path='/test/process'
        component={TestProcessPage} />
      <UserRoute
        location={location}
        exact
        path='/user/orders'
        component={UserOrdersPage} />
      <UserRoute
        location={location}
        exact
        path='/test/result/:orderId'
        component={TestResultPage} />
      <UserRoute
        location={location}
        exact
        path='/user/profile'
        component={UserProfilePage} />
      <UserRoute
        location={location}
        exact
        path='/contests/scholarship/compete'
        component={ScholarshipContestCompetePage} />
      <GuestRoute
        location={location}
        exact
        path='/login'
        component={LoginPage} />
      <GuestRoute
        location={location}
        exact
        path='/register'
        component={RegisterPage} />
      <GuestRoute
        location={location}
        exact
        path='/user/forgot-password'
        component={ForgotPasswordPage} />
      <GuestRoute
        location={location}
        exact
        path='/user/recover-password/:token'
        component={RecoverPasswordPage} />
      <AdminRoute
        location={location}
        exact
        path='/user/list'
        component={UsersListPage} />
      <AdminRoute
        location={location}
        exact
        path='/contests/scholarship/user-list'
        component={UserCompetitionListsPage} />
      <Route 
        location={location}
        component={NotFoundPage} />
    </Switch>
  );

}

export default App;
