import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_ORDERS_FETCHED,
    USER_REGISTERED,
    TOKEN_REFRESHED,
    USER_BALANCE_FETCHED,
    USER_WANTED_TO_FINISH_THE_TEST,
    RECOVER_PASSWORD_TOKEN_VALIDATED,
    EMAIL_FOR_PASSWORD_RECOVER_FETCHED,
    RECOVER_PASSWORD_TOKEN_CREATED,
    USERS_LIST_FETCHED,
    USER_SUBMITTED_SCHOLARSHIP_CONTEST
} from '../types';
import api from '../api';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

export const userLoggedIn = data => ({
    type: USER_LOGGED_IN,
    auth: data,
})

const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

const userOrdersFetched = (orders) => ({
    type: USER_ORDERS_FETCHED,
    orders,
});

const userRegistered = () => ({
    type: USER_REGISTERED,
    justRegistered: true
});

const tokenRefreshed = token => ({
    type: TOKEN_REFRESHED,
    token
});

const userBalanceFetched = balance => ({
    type: USER_BALANCE_FETCHED,
    balance: balance
});

const userWantedToFinishTheTest = () => ({
    type: USER_WANTED_TO_FINISH_THE_TEST,
    userWantedToFinishTheTest: true,
});

const emailForPasswordRecoverFecthed = email => ({
    type: EMAIL_FOR_PASSWORD_RECOVER_FETCHED,
    email,
});

const recoverPasswordTokenValidated = () => ({
    type: RECOVER_PASSWORD_TOKEN_VALIDATED,
});

const recoverPasswordTokenCreated = () => ({
    type: RECOVER_PASSWORD_TOKEN_CREATED,
});

const usersListFetched = users => ({
    type: USERS_LIST_FETCHED,
    users
});

const userSubmittedScholarshipContest = () => ({
    type: USER_SUBMITTED_SCHOLARSHIP_CONTEST
});

export const login = credentials => dispatch =>
    api.user.login(credentials).then(res => {
        localStorage.token = JSON.stringify(res.token);
        localStorage.user = JSON.stringify(res.user);
        setAuthorizationHeader(res.token.accessToken);
        dispatch(userLoggedIn(res));
    })

export const logout = () => dispatch => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuthorizationHeader(false);
    dispatch(userLoggedOut());
};

export const fetchUserOrders = () => dispatch =>
    api.user.orders().then(orders => dispatch(userOrdersFetched(orders)));

export const registerUser = user => dispatch =>
    api.user.register(user).then(() => dispatch(userRegistered()));

export const refreshToken = token => dispatch =>
    api.user.refreshToken(token).then(res => {
        localStorage.token = JSON.stringify(res.token);
        setAuthorizationHeader(res.token.accessToken);
        dispatch(tokenRefreshed(res.token));
    }).catch(err => console.log('err happened while refreshing the access token', err))

export const fetchUserBalance = () => dispatch =>
    api.user.balance()
        .then(res => dispatch(userBalanceFetched(res.balance)));

export const userWantsToFinishTheTest = () => dispatch => 
    dispatch(userWantedToFinishTheTest());

export const validateRecoverPasswordToken = token => dispatch => 
    api.user.recoverPassword(token).then(() => dispatch(recoverPasswordTokenValidated()));

export const getEmailForPasswordRecover = token => dispatch =>
    api.user.getEmailForPasswordRecover(token).then(res => dispatch(emailForPasswordRecoverFecthed(res.email)));

export const createRecoverPasswordToken = email => dispatch =>
    api.user.createRecoverPasswordToken(email).then(() => dispatch(recoverPasswordTokenCreated()));

export const fetchUsersList = () => dispatch =>
    api.user.list().then(users => dispatch(usersListFetched(users)));

export const submitScholarshipContest = data => dispatch =>
    api.user.compete(data).then(() => dispatch(userSubmittedScholarshipContest()));
