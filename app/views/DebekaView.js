import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { Circle } from 'rc-progress';

class DebekaView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userAccount: 0,
            watchAccount: 0,
            distanceInCurrentPeriod: 0,
            percentageInCurrentPeriod: 0,
            coins: 0,
            ether: 0,
            euro: 0,
            txhistory: [],
            totalRewardsInEther: 0
        }
    }

    componentDidMount() {
        //return fetch('http://52.232.41.117:8000/state')
        return fetch('http://localhost:8000/state')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    userAccount: responseJson.state.user_Account,
                    watchAccount: responseJson.state.watch_Account,
                    distanceInCurrentPeriod: responseJson.state.distance_In_Current_Period,
                    percentageInCurrentPeriod: responseJson.state.percentage_In_Current_Period,
                    coins: responseJson.state.coins,
                    ether: responseJson.state.ether,
                    euro: responseJson.state.euro,
                    txhistory: responseJson.state.txhistory,
                    totalRewardsInEther: responseJson.state.total_Rewards_in_Ether
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <div>
                    <div id="euro-value">{this.state.euro} &euro;</div>
                    <div id="ether-value">{this.state.ether}</div>
                    <div id="debicoins">{this.state.coins}</div>
                </div>
                <div className="progressbar">
                    <Progress bar color="success" value={this.state.percentageInCurrentPeriod * 100}>{this.state.percentageInCurrentPeriod * 100} %</Progress>
                </div>
                <div className="progressCircle">
                    <div id="progress-value">2</div>
                    <Circle percent={this.state.percentageInCurrentPeriod * 100} strokeWidth="10" strokeColor="#22ace3" trailWidth="10" trailColor="#77d1ed"/>
                </div>
            </div>
        )
    }
}

export default DebekaView
