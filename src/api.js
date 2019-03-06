import axios from 'axios';
import { API_URL, ROLE_ID, ROLE_KEY } from './env';

export default {
    user: {
        register: user =>
            axios.post(`${API_URL}user/register`, {
                role: {
                    id: ROLE_ID,
                    key: ROLE_KEY,
                },
                idn: parseInt(user.idn, 10),
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                mobilePhone: parseInt(user.mobilePhone.split(' ').join(''), 10),
            }).then(res => res.data),
        login: credentials =>
            axios.post(`${API_URL}user/login`, {
                email: credentials.email,
                password: credentials.password
            }).then(res => res.data),
        orders: () =>
            axios.get(`${API_URL}user/orders`)
                .then(res => res.data),
        refreshToken: token =>
            axios.post(`${API_URL}token/refresh`, {
                accessToken: token.accessToken,
                expiresIn: token.expiresIn,
                refreshToken: token.refreshToken,
            }).then(res => res.data),
        balance: () =>
            axios.get(`${API_URL}user/UStudyBalance`)
                .then(res => res.data),
        recoverPassword: form =>
            axios.post(`${API_URL}user/recoverPassword/${form.userEmailVerificationTokenString}`, {
                password: form.password,
                userEmailVerificationTokenString: form.userEmailVerificationTokenString
            }).then(res => res.data),
        getEmailForPasswordRecover: token =>
            axios.get(`${API_URL}user/getEmailForPasswordRecover/${token}`)
                .then(res => res.data),
        createRecoverPasswordToken: email =>
            axios.get(`${API_URL}user/createRecoverPasswordToken/${email}`)
                .then(res => res.data),
        list: () =>
            axios.get(`${API_URL}user`)
                .then(res => res.data.users),
        compete: data =>
            axios.post(`${API_URL}user/compete`, {
                languageId: parseInt(data.languageId, 10),
                centerId: parseInt(data.centerId, 10),
                testDateTime: data.testDateTime,
            }).then(res => res.data),
        competitionLists: () => 
            axios.get(`${API_URL}user/competitionLists`).then(res => res.data.competitionLists)

    },
    language: {
        get: id =>
            axios.get(`${API_URL}language/${id}`).then(res => res.data)
    },
    test: {
        getByLanguage: id => {
            switch (id) {
                case 1:
                    return axios.get(`${API_URL}test/94`).then(res => res.data);
                case 2:
                    return axios.get(`${API_URL}test/95`).then(res => res.data);
                default:
                    return axios.get(`${API_URL}test/94`).then(res => res.data);
            }
        },
        order: data =>
            axios.post(`${API_URL}user/orderTrialTestByUtest`, {
                testId: data.testId,
                selectiveModuleIds: data.selectiveModuleIds,
            }).then(res => res.data),
        finish: data =>
            axios.post(`${API_URL}test/generateResult`, {
                orderId: data.orderId,
                userAnswers: data.userAnswers,
            }).then(res => res.data),
        result: orderId =>
            axios.get(`${API_URL}test/result/${orderId}`)
                .then(res => res.data.users),
        centers: () =>
            axios.get(`${API_URL}test/centers`)
                .then(res => res.data.testCenters),
    }
}