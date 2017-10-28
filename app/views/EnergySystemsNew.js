import React, { Component } from 'react';

class EnergySystemsNew extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Wizard with Validation</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <h2>
                                    Validation Wizard Form
                                </h2>
                                <p>
                                    This example show how to use Steps with jQuery Validation plugin.
                                </p>
                                <form id="form" action="#" className="wizard-big">
                                    <h1>Account</h1>
                                    <fieldset>
                                        <h2>Account Information</h2>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <label>Username *</label>
                                                    <input id="userName" name="userName" type="text" className="form-control required"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password *</label>
                                                    <input id="password" name="password" type="text" className="form-control required"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirm Password *</label>
                                                    <input id="confirm" name="confirm" type="text" className="form-control required"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="text-center">
                                                    <div style={{"marginTop": "20px"}}>
                                                        <i className="fa fa-sign-in" style={{"fontSize": "180px",color: "#e5e5e5"}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <h1>Profile</h1>
                                    <fieldset>
                                        <h2>Profile Information</h2>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>First name *</label>
                                                    <input id="name" name="name" type="text" className="form-control required"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Last name *</label>
                                                    <input id="surname" name="surname" type="text" className="form-control required"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Email *</label>
                                                    <input id="email" name="email" type="text" className="form-control required email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Address *</label>
                                                    <input id="address" name="address" type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <h1>Warning</h1>
                                    <fieldset>
                                        <div className="text-center" style={{"marginTop": "120px"}}>
                                            <h2>You did it Man :-)</h2>
                                        </div>
                                    </fieldset>
                                    <h1>Finish</h1>
                                    <fieldset>
                                        <h2>Terms and Conditions</h2>
                                        <input id="acceptTerms" name="acceptTerms" type="checkbox" className="required"/> <label htmlFor="acceptTerms">I agree with the Terms and Conditions.</label>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EnergySystemsNew
