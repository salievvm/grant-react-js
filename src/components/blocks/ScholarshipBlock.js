import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className="row">
        <div className="col-md-8 col-lg-12">
            <div className="list-group">
                <blockquote className="blockquote bd-l bd-5 pd-l-20">
                    <footer className="blockquote-footer tx-14">
                        <p>
                                Настоящие правила Конкурса, регулирует правоотношения, возникающие между ТОО «U-FUTURE», юридическим
                                лицом,
                                <br/> созданным и действующим в соответствии с законодательством Республики Казахстан,
                                <br/>с местом нахождения по адресу: г. Алматы, Ауэзовский район, мкр.Мамыр-4, д.145В, «Организатор конкурса»
                                и физическим лицом, «Участник конкурса».
                        </p>
                        <hr/>
                        <p>
                            Целью проведения конкурса непосредственно является: поиск и выявление талантливых учащихся, развитие знаний и способностей
                            <br/> у молодого поколения, повышение школьной грамотности, создание условий для интеллектуального
                            <br/> развития и поддержки одаренных детей. Победителям и призерам Конкурса предоставляются
                            <br/> стипендии в соответствии с Правилами Конкурса. Конкурс проводится на добровольной
                            <br/> основе. При регистрации физическое лицо, ознакомленное с Правилами конкурса, присоединившееся,
                            <br/> а равно принявшее условия проведения Конкурса, считается Участником конкурса.
                        </p>
                    </footer>
                </blockquote>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">1. Конкурс состоит из двух этапов:</a>

                    </div>
                    {/* d-flex */}
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">на первом этапе проводится комплексное тестирование в виде оффлайн: начинается в 8:00 по местному
                            времени: будет длиться 3 часа 50 минут;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">участники, набравшие выше 50 баллов, автоматически проходят на второй этап;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">второй этап: письменный экзамен по математике состоящий из 5 вопросов, время выполнения задания:
                            20 минут; </a>
                    </h6>
                </div>
                {/* list-group-item */}
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">2. Зарегистрироваться на сайте grant.ustudy.kz</a>
                    </div>
                    {/* d-flex */}
                </div>
                {/* list-group-item */}
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">3. Оплата за участие в конкурсе: 5 000 тенге</a>
                    </div>
                    {/* d-flex */}
                </div>


                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">4. В конкурсе может участвовать ученики 10-11 классов общеобразовательных учреждений;</a>
                    </div>
                    {/* d-flex */}
                </div>

                {/* list-group-item */}
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">5. Для участия в конкурсе необходимо предоставить</a>

                    </div>
                    {/* d-flex */}
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">удостоверение личности;</a>
                    </h6>
                </div>
                {/* list-group-item */}
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">6. Также можно пройти пробное тестирование на сайте grant.ustudy.kz , стоимость прохождения одного
                            тестирования 400 тенге</a>
                    </div>
                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">7. Конкурс проводится 30.05.2018г.</a>
                    </div>
                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">8. Шкала перевода тестовых баллов в семидесятибалльную систему оценки результатов:</a>
                    </div>
                    <b>1 - этап: </b>
                    <hr/>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">50 балл -25%</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">60 балл - 30%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">70 балл - 35%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">80 балл - 40%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">90 балл - 45%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">100 балл - 50%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">110 балл - 55%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">120 балл - 60%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">130 балл - 65%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">140 балл - 70%;</a>
                    </h6>
                    <br/>
                    <br/>
                    <b>2 этап: 6 балла за каждого правильного ответа:</b>
                    <hr/>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary"> 1 правильный ответ - 6%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary"> 2 правильный ответ - 12%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary"> 3 правильный ответ - 18%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary"> 4 правильный ответ - 24%;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary"> 5 правильный ответ - 30%;</a>
                    </h6>
                    <br/>
                    <br/>
                    <hr/>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Максимальное возможное количество баллов, которое можно набрать за оба тура: 100%;</a>
                    </h6>

                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">9. Церемония награждения победителей состоится не позднее 12 дней после проведения конкурса</a>
                    </div>
                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">10. Победители конкурса награждаются денежными призами:</a>

                    </div>
                    {/* d-flex */}
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">1 место - 200 000 тенге;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">2 место - 150 000 тенге;</a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">3 место - 100 000 тенге;</a>
                    </h6>
                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">11. Также предусмотрены утешительные призы; </a>
                    </div>
                </div>

                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">12. «Ustudy» переводит деньги на счет ВУЗа выбранного ученика, деньги в течение 9 месяцев будет перечисляться
                            на банковскую карту ученика; </a>
                    </div>
                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">13. В случае, если ученик не поступить в ВУЗ, выигранные деньги также будет перечисляться на карточку
                            ученика в виде стипендия в течение 9 месяцев; </a>
                    </div>
                </div>




                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">Наши центры:</a>

                    </div>
                    {/* d-flex */}

                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Алматы, Мамыр-4, 145В Тел.: +7 727 356 00 28
                        </a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Шымкент, 8-ші ықшам аудан, 61 Тел.: +7 7252 98 40 22

                        </a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Шымкент, Рыскулов көшесі, 15 Тел.: +7 7252 98 40 31

                        </a>
                    </h6>
                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Атырау, Сауырғалиев көшесі, 2 Тел.: +7 7122 76 61 53

                        </a>
                    </h6>

                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Семей, Гагарин көшесі, 158 Тел.: +7 7222 55 60 28




                        </a>
                    </h6>


                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Қызылорда, Тәжібаев көшесі, 18 А Тел.: +7 7242 55 19 50






                        </a>
                    </h6>

                    <h6 className="lh-3 mg-b-10">
                        <a className="tx-inverse hover-primary">Орал, Айталиев көшесі, 4 Тел.: +7 7112 93 30 89




                        </a>
                    </h6>

                </div>
                <div className="list-group-item d-block pd-y-20">
                    <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                        <a className="tx-info">Для более подробной информации обращаться по номеру: +7 727 356 00 28 или на короткий номер с мобильного
                            3560 (бесплатно для всех операторов, кроме Алтел)</a>
                    </div>
                </div>
            </div>
            <br/>
            <Link to="/contests/scholarship/compete" className="btn btn-primary btn-lg btn-block mg-b-10">Участвовать в конкурсе</Link>
        </div>
        {/* col-6 */}
    </div>
  )
}
