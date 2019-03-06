import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import { userLoggedIn, refreshToken, logout } from './actions/user';
import store from './store';
import axios from 'axios';
import swal from 'sweetalert';

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (!!error.response === false) {
        swal({
            title: "Ошибка",
            text: "Произошла ошибка на сервере, попробуйте позже",
            icon: "error",
        });
    } else if (error.response.status === 401) {
        swal({
            title: "Внимание",
            text: "Для обеспечения безопасности - авторизуйтесь заново",
            icon: "warning",
        });
        store.dispatch(logout());
    } else {
        return Promise.reject(error)
    }
}
);



if (localStorage.token && localStorage.user) {
    store.dispatch(refreshToken(JSON.parse(localStorage.token)));
    setInterval(() => store.dispatch(refreshToken(JSON.parse(localStorage.token))), 600 * 1000);
    const auth = {
        token: JSON.parse(localStorage.token),
        user: JSON.parse(localStorage.user)
    }
    setAuthorizationHeader(auth.token.accessToken);
    store.dispatch(userLoggedIn(auth));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
