import React, { Component } from 'react'

class UserProfileBlock extends Component {
    render() {

        const {idn, email, userName} = this.props;

        return (
            <div className="row row-sm">
                <div className="col-lg-12">
                    <div className="card card-profile">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body">
                                    <h3 className="card-profile-name">{userName}</h3>
                                    <p className="card-profile-position">ИИН:
                            <a id="idn">{idn}</a>
                                    </p>
                                    <p id="email">{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileBlock;
