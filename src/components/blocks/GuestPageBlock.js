import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className="signin-left">
            <div className="signin-box">
                <h2 className="slim-logo">
                    <Link to="/">
                        <img src={require('../../images/logo.png')} className="img-fluid" alt="" width="50%" />
                    </Link>
                </h2>
                <p>Сдай ЕНТ и выиграй стипендию до 200 000 тенге от лучшего образовательного центра страны!</p>
                <p><Link to="/about" className="btn btn-outline-secondary pd-x-25">Подробнее</Link></p>
                <p className="tx-12">Copyright {(new Date()).getFullYear()} &copy; Все права защищены.</p>
            </div>
        </div>
    )
}
