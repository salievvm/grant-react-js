import React, { Component } from 'react';

class TestResultBlock extends Component {

    state = {
        totalScore: 0,
        totalCompositionScore: 0,
    }

    componentDidMount() {
        const { result } = this.props;

        result.moduleResults.map(moduleResult => this.setState(prevState => {
            return {
                totalScore: prevState.totalScore + moduleResult.score,
                totalCompositionScore: prevState.totalCompositionScore + moduleResult.totalComposition,
            }
        }))
    }

    render() {

        const { result, orderId } = this.props;
        const { totalScore, totalCompositionScore } = this.state;

        return (
            <div className="section-wrapper">
                <label className="section-title">Вы набрали {totalScore} баллов из общих {totalCompositionScore}</label>
                <p className="mg-b-20 mg-sm-b-40">Номер заказа: {orderId}</p>
                <div className="table-responsive">
                    <table className="table mg-b-0">
                        <thead>
                            <tr>
                                <th>Наименование предмета</th>
                                <th>Количество набранных баллов</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.moduleResults.map((moduleResult, i) =>
                                <tr key={i}>
                                    <td>
                                        {moduleResult.module.name}
                                    </td>
                                    <td>
                                        {moduleResult.score} баллов из {moduleResult.totalComposition}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TestResultBlock;
