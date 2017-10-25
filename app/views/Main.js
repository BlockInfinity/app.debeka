import React, { Component } from 'react';




class Main extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg">
                            <h1>
                                Current Metamask Account: {web3.eth.accounts}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Main