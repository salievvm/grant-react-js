import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserOrders } from '../../actions/user';
import moment from 'moment';
import { Link } from 'react-router-dom';

class UserOrdersBlock extends Component {

    state = {
        success: false,
        loading: false,
        errors: {}
    }

    componentWillMount() {
        require('moment/locale/ru.js');
        this.setState({ loading: true });
        this.props.fetchUserOrders()
            .then(() => this.setState({ loading: false, success: true }))
            .catch(() => {
                const errors = {};
                errors.global = 'Отсутствуют данные';
                this.setState({ errors, loading: false });
            })
    }

    render() {

        const { orders } = this.props;
        const { loading, errors, success } = this.state;

        return (
            <div className="section-wrapper">


                {loading &&
                    <div className="col-md-12 mg-t-30">
                        <div className="d-flex bg-gray-200 ht-300 pos-relative align-items-center">
                            <div className="sk-chasing-dots">
                                <div className="sk-child sk-dot1 bg-gray-800"></div>
                                <div className="sk-child sk-dot2 bg-gray-800"></div>
                            </div>
                        </div>
                    </div>
                }

                {
                    errors.global &&
                    <div className="alert alert-warning" role="alert">
                        {errors.global}
                    </div>
                }

                {
                    success &&
                    <div>
                        <p className="mg-b-20 mg-sm-b-40">Нажмите на номер заказа, чтобы посмотреть подробный отчет</p>
                        <div className="table-responsive">
                            <table className="table mg-b-0">
                                <thead>
                                    <tr>
                                        <th>Номер заказа</th>
                                        <th>Дата и время тестирования</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!loading && !errors.global &&
                                        orders.map(order =>
                                            <tr key={order.id}>
                                                <th scope="row"><Link
                                                    to={"/test/result/" + order.id}>{order.id}</Link></th>
                                                <td>{moment(order.createdAt).format('llll')}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.user.orders
    }
}

export default connect(mapStateToProps, { fetchUserOrders })(UserOrdersBlock);
