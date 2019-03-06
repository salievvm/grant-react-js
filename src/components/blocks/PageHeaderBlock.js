import React from 'react';
import {Link} from 'react-router-dom';

const PageHeaderBlock = ({ pageTitle }) => {
    return (
        <div className="slim-pageheader">
            <ol className="breadcrumb slim-breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
            </ol>
            <h6 className="slim-pagetitle">{pageTitle}</h6>
        </div>
    )
}

export default PageHeaderBlock;
