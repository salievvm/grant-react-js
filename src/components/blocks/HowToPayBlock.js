import React from 'react'

export default () => {
    return (
        <div className="row row-sm row-timeline">
            <div className="col-lg-12">

                <div className="card pd-30">
                    <div className="timeline-group">
                        {/* timeline-item */}
                        <div className="timeline-item">
                            <div className="timeline-time">1</div>
                            <div className="timeline-body">
                                <p className="timeline-title">
                                    <a>Нажмите – «Оплата услуг»
                            </a>
                                </p>
                                <br />
                                <div className="row mg-b-15">
                                    <div className="col-8">
                                        <img src={require('../../images/howToPay/1.png')} className="img-fluid" alt="" />
                                    </div>
                                    {/* col-6 */}
                                </div>
                            </div>
                            {/* timeline-body */}
                        </div>
                        {/* timeline-item */}
                        <div className="timeline-item">
                            <div className="timeline-time">2</div>
                            <div className="timeline-body">
                                <p className="timeline-title">
                                    <a>Нажмите – «Другие услуги»

                            </a>
                                </p>
                                <br />
                                <div className="row mg-b-15">
                                    <div className="col-8">
                                        <img src={require('../../images/howToPay/2.png')} className="img-fluid" alt="" />
                                    </div>
                                    {/* col-6 */}
                                </div>
                            </div>
                            {/* timeline-body */}
                        </div>


                        <div className="timeline-item">
                            <div className="timeline-time">3</div>
                            <div className="timeline-body">
                                <p className="timeline-title">
                                    <a>
                                        Нажмите – «Образовательные услуги»


                            </a>
                                </p>
                                <br />
                                <div className="row mg-b-15">
                                    <div className="col-8">
                                        <img src={require('../../images/howToPay/3.jpg')} className="img-fluid" alt="" />
                                    </div>
                                    {/* col-6 */}
                                </div>
                            </div>
                            {/* timeline-body */}
                        </div>


                        <div className="timeline-item">
                            <div className="timeline-time">4</div>
                            <div className="timeline-body">
                                <p className="timeline-title">
                                    <a>
                                        Нажмите - «U-PARTNERS»



                            </a>
                                </p>
                                <br />
                                <div className="row mg-b-15">
                                    <div className="col-8">
                                        <img src={require('../../images/howToPay/4.jpg')} className="img-fluid" alt="" />
                                    </div>
                                    {/* col-6 */}
                                </div>
                            </div>
                            {/* timeline-body */}
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-time">5</div>
                            <div className="timeline-body">
                                <p className="timeline-title">
                                    <a>
                                        Введите ваш ИИН:
                                <span id="userIdn"></span>
                                    </a>
                                </p>
                                <br />
                                <div className="row mg-b-15">
                                    <div className="col-8">
                                        <img src={require('../../images/howToPay/5.png')} className="img-fluid" alt="" />
                                    </div>
                                    {/* col-6 */}
                                </div>
                            </div>
                            {/* timeline-body */}
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-time">6</div>
                            <div className="timeline-body">
                                <p className="timeline-title">
                                    <a>
                                        Внесите сумму (обязательно сохраняйте чек)


                            </a>
                                </p>
                                <br />
                                <div className="row mg-b-15">
                                    <div className="col-8">
                                        <img src={require('../../images/howToPay/6.png')} className="img-fluid" alt="" />
                                    </div>
                                    {/* col-6 */}
                                </div>
                            </div>
                            {/* timeline-body */}
                        </div>
                    </div>
                    {/* timeline-group */}
                </div>
                {/* card */}

            </div>
        </div>
    )
}
