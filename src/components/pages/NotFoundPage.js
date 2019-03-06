import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {

    state = {
        pageTitle: '404 | UStudy Стипендия, Грант'
    }

    componentDidMount() {
        document.title = this.state.pageTitle;
    }

    render() {
        return (
            <div className="page-error-wrapper">
                <div>
                    <h1 className="error-title">404</h1>
                    <h5 className="tx-sm-24 tx-normal">Такой страницы нет</h5>
                    <p className="mg-b-50">Зато есть много других страниц</p>
                    <p className="mg-b-50"><Link to="/" className="btn btn-error">На главную</Link></p>
                    <p className="error-footer">Copyright {(new Date()).getFullYear()} &copy; Все права защищены.</p>
                </div>
            </div>
        )
    }
}

export default NotFoundPage;
