import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAdmin ? <Component {...props} /> : <Redirect to="/" />}
  />
);

function mapStateToProps(state) {
  return {
    isAdmin: !!state.user.user?!!state.user.user.roles.find(role => role.name === 'admin'):false,
  };
}

export default connect(mapStateToProps)(AdminRoute);