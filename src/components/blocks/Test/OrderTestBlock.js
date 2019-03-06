import React, { Component } from 'react';
import moment from 'moment';

class OrderTestBlock extends Component {

    componentWillMount() {
        require('moment/locale/ru.js');
    }

    render() {

        const { email, firstName, lastName } = this.props;

        return (
            <div>
                <div className="invoice-header">
                    <h1 className="invoice-title">Пробный тест</h1>
                    <div className="billed-from">
                        <h6>UStudy</h6>
                        <p>Казахстан, г. Алматы, Мамыр-4 145В
                        <br />  +7 (727) 356 00 28 или 3560
                        <br /> Email: info@ustudy.kz</p>
                    </div>
                    {/* billed-from */}
                </div>
                {/* invoice-header */}

                <div className="row mg-t-20">
                    <div className="col-md">
                        <label className="section-label-sm tx-gray-500">Участник</label>
                        <div className="billed-to">
                            <h6 className="tx-gray-800">{firstName} {lastName}</h6>
                            <p>Email: {email}</p>
                        </div>
                    </div>
                    {/* col */}
                    <div className="col-md">
                        <label className="section-label-sm tx-gray-500">Дополнительная информация</label>
                        <p className="invoice-info-row">
                            <span>Наименование пробного тестирование</span>
                            <span>ЕНТ</span>
                        </p>
                        <p className="invoice-info-row">
                            <span>Дата и время пробного тестирование</span>
                            <span>{moment().format('llll')}</span>
                        </p>
                    </div>
                    {/* col */}
                </div>
                {/* row */}

                <div className="table-responsive mg-t-40">
                    <table className="table table-invoice">
                        <thead>
                            <tr>
                                <th className="wd-20p">Наименование</th>
                                <th className="wd-40p">Описание</th>
                                <th className="tx-center">Количество</th>
                                <th className="tx-right">Цена</th>
                                <th className="tx-right">Общая сумма</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ЕНТ</td>
                                <td className="tx-12">Единое национальное тестирование (ЕНТ) — система оценки знаний выпускников, применяемая в Республике Казахстан. </td>
                                <td className="tx-center">1</td>
                                <td className="tx-right">400.00 тенге</td>
                                <td className="tx-right">400.00 тенге</td>
                            </tr>
                            <tr>
                                <td colSpan="2" rowSpan="4" className="valign-middle">
                                    <div className="invoice-notes">
                                        <label className="section-label-sm tx-gray-500">Внимание</label>
                                        <p>Выберите пожалуйста язык тестирования и профильные предметы</p>
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
}

export default OrderTestBlock;