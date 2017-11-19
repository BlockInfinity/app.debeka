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
            txhistory: [],
            totalRewardsInEther: 0
        }
    }

    componentDidMount() {
        return fetch('http://52.232.41.117:8000/state')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    userAccount: responseJson.user_Account,
                    watchAccount: responseJson.watch_Account,
                    distanceInCurrentPeriod: responseJson.distance_In_Current_Period,
                    percentageInCurrentPeriod: responseJson.percentage_In_Current_Period,
                    coins: responseJson.coins,
                    txhistory: responseJson.txhistory,
                    totalRewardsInEther: responseJson.total_Rewards_in_Ether
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
                    <div id="euro-value">{this.state.coins} &euro;</div>
                    <div id="ether-value">{this.state.coins * 0.000583}</div>
                    <div id="debicoins">{this.state.coins}</div>
                </div>
                <div className="progressbar">
                    <Progress bar color="success" value={this.state.distanceInCurrentPeriod}>{this.state.distanceInCurrentPeriod} %</Progress>
                </div>
                <div className="progressCircle">
                    <div id="progress-value">2</div>
                    <Circle percent={this.state.percentageInCurrentPeriod} strokeWidth="10" strokeColor="#22ace3" trailWidth="10" trailColor="#77d1ed"/>
                </div>
            </div>
        )
    }
}

export default DebekaView
