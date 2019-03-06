import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_ORDERS_FETCHED, USER_REGISTERED, TOKEN_REFRESHED, USER_BALANCE_FETCHED, USER_WANTED_TO_FINISH_THE_TEST, RECOVER_PASSWORD_TOKEN_VALIDATED, EMAIL_FOR_PASSWORD_RECOVER_FETCHED, RECOVER_PASSWORD_TOKEN_CREATED, USERS_LIST_FETCHED, USER_SUBMITTED_SCHOLARSHIP_CONTEST } from '../types';

export default function user(state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.auth;
        case USER_LOGGED_OUT:
            return {};
        case USER_ORDERS_FETCHED:
            return {...state, ...action.orders}
        case USER_REGISTERED:
            state.justRegistered = action.justRegistered;
            return {...state}
        case TOKEN_REFRESHED:
            state.token = action.token
            return {...state}
        case USER_BALANCE_FETCHED:
            state.balance = action.balance;
            return {...state}
        case USER_WANTED_TO_FINISH_THE_TEST:
            state.userWantedToFinishTheTest = action.userWantedToFinishTheTest;
            return {...state};
        case RECOVER_PASSWORD_TOKEN_VALIDATED:
            state.recovedPasswordTokenValidated = true;
            return {...state};
        case EMAIL_FOR_PASSWORD_RECOVER_FETCHED:
            state.emailForPasswordRecover = action.email;
            return {...state};
        case RECOVER_PASSWORD_TOKEN_CREATED:
            return state;
        case USERS_LIST_FETCHED:
            state.users = action.users;
            return {...state}
        case USER_SUBMITTED_SCHOLARSHIP_CONTEST:
            return state;
        default:
            state.justRegistered = false;
            return {...state};
    }
}