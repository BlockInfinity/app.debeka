import React, { Component } from 'react';

class Dashboard extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="widget style1">
                            <div className="row">
                                <div className="col-xs-4 text-center">
                                    <i className="fa fa-trophy fa-5x"></i>
                                </div>
                                <div className="col-xs-8 text-right">
                                    <span> Today income </span>
                                    <h2 className="font-bold">$ 4,232</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget style1 navy-bg">
                            <div className="row">
                                <div className="col-xs-4">
                                    <i className="fa fa-cloud fa-5x"></i>
                                </div>
                                <div className="col-xs-8 text-right">
                                    <span> Today degrees </span>
                                    <h2 className="font-bold">26'C</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget style1 lazur-bg">
                            <div className="row">
                                <div className="col-xs-4">
                                    <i className="fa fa-envelope-o fa-5x"></i>
                                </div>
                                <div className="col-xs-8 text-right">
                                    <span> New messages </span>
                                    <h2 className="font-bold">260</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget style1 yellow-bg">
                            <div className="row">
                                <div className="col-xs-4">
                                    <i className="fa fa-music fa-5x"></i>
                                </div>
                                <div className="col-xs-8 text-right">
                                    <span> New albums </span>
                                    <h2 className="font-bold">12</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="widget navy-bg no-padding">
                            <div className="p-m">
                                <h1 className="m-xs">$ 1,540</h1>
                                <h3 className="font-bold no-margins">
                                    Annual income
                                </h3>
                                <small>Income form project Alpha.</small>
                            </div>
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-chart1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget lazur-bg no-padding">
                            <div className="p-m">
                                <h1 className="m-xs">$ 210,660</h1>
                                <h3 className="font-bold no-margins">
                                    Monthly income
                                </h3>
                                <small>Income form project Beta.</small>
                            </div>
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-chart2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget yellw-bg no-padding">
                            <div className="p-m">
                                <h1 className="m-xs">$ 50,992</h1>
                                <h3 className="font-bold no-margins">
                                    Half-year revenue margin
                                </h3>
                                <small>Sales marketing.</small>
                            </div>
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-chart3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="widget style1 navy-bg">
                            <div className="row vertical-align">
                                <div className="col-xs-3">
                                    <i className="fa fa-user fa-3x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <h2 className="font-bold">217</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget style1 navy-bg">
                            <div className="row vertical-align">
                                <div className="col-xs-3">
                                    <i className="fa fa-thumbs-up fa-3x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <h2 className="font-bold">400</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget style1 navy-bg">
                            <div className="row vertical-align">
                                <div className="col-xs-3">
                                    <i className="fa fa-rss fa-3x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <h2 className="font-bold">10</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget style1 lazur-bg">
                            <div className="row vertical-align">
                                <div className="col-xs-3">
                                    <i className="fa fa-phone fa-3x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <h2 className="font-bold">120</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget style1 lazur-bg">
                            <div className="row vertical-align">
                                <div className="col-xs-3">
                                    <i className="fa fa-euro fa-3x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <h2 className="font-bold">462</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget style1 yellow-bg">
                            <div className="row vertical-align">
                                <div className="col-xs-3">
                                    <i className="fa fa-shield fa-3x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <h2 className="font-bold">610</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget-head-color-box navy-bg p-lg text-center">
                            <div className="m-b-md">
                                <h2 className="font-bold no-margins">
                                    Alex Smith
                                </h2>
                                <small>Founder of Groupeq</small>
                            </div>
                            <img src="img/a4.jpg" className="img-circle circle-border m-b-md" alt="profile"/>
                            <div>
                                <span>100 Tweets</span> |
                                <span>350 Following</span> |
                                <span>610 Followers</span>
                            </div>
                        </div>
                        <div className="widget-text-box">
                            <h4 className="media-heading">Alex Smith</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-right">
                                <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget navy-bg p-lg text-center">
                            <div className="m-b-md">
                                <i className="fa fa-shield fa-4x"></i>
                                <h1 className="m-xs">456</h1>
                                <h3 className="font-bold no-margins">
                                    Shield
                                </h3>
                                <small>power</small>
                            </div>
                        </div>
                        <div className="widget  p-lg text-center">
                            <div className="m-b-md">
                                <i className="fa fa-flash fa-4x"></i>
                                <h1 className="m-xs">612</h1>
                                <h3 className="font-bold no-margins">
                                    Thunder
                                </h3>
                                <small>amount</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget lazur-bg p-xl">
                            <h2>
                                Janet Smith
                            </h2>
                            <ul className="list-unstyled m-t-md">
                                <li>
                                    <span className="fa fa-envelope m-r-xs"></span>
                                    <label>Email:</label>
                                    mike@mail.com
                                </li>
                                <li>
                                    <span className="fa fa-home m-r-xs"></span>
                                    <label>Address:</label>
                                    Street 200, Avenue 10
                                </li>
                                <li>
                                    <span className="fa fa-phone m-r-xs"></span>
                                    <label>Contact:</label>
                                    (+121) 678 3462
                                </li>
                            </ul>
                        </div>
                        <div className="widget red-bg p-lg text-center">
                            <div className="m-b-md">
                                <i className="fa fa-bell fa-4x"></i>
                                <h1 className="m-xs">47</h1>
                                <h3 className="font-bold no-margins">
                                    Notification
                                </h3>
                                <small>We detect the error.</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget yellow-bg p-lg text-center">
                            <div className="m-b-md">
                                <i className="fa fa-thumbs-up fa-4x"></i>
                                <h1 className="m-xs">520</h1>
                                <h3 className="font-bold no-margins">
                                    Likes
                                </h3>
                                <small>amount</small>
                            </div>
                        </div>
                        <div className="widget yellow-bg p-lg text-center">
                            <div className="m-b-md">
                                <i className="fa fa-warning fa-4x"></i>
                                <h1 className="m-xs">Alarm</h1>
                                <h3 className="font-bold no-margins">
                                    Do
                                </h3>
                                <small>something</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-t-lg">
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-content">
                                <div>
                                    <div className="chat-activity-list">
                                        <div className="chat-element">
                                            <a href="#" className="pull-left">
                                                <img alt="image" className="img-circle" src="img/a2.jpg"/>
                                            </a>
                                            <div className="media-body ">
                                                <small className="pull-right text-navy">1m ago</small>
                                                <strong>Mike Smith</strong>
                                                <p className="m-b-xs">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                </p>
                                                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                                            </div>
                                        </div>
                                        <div className="chat-element right">
                                            <a href="#" className="pull-right">
                                                <img alt="image" className="img-circle" src="img/a4.jpg"/>
                                            </a>
                                            <div className="media-body text-right ">
                                                <small className="pull-left">5m ago</small>
                                                <strong>John Smith</strong>
                                                <p className="m-b-xs">
                                                    Lorem Ipsum is simply dummy text of the printing.
                                                </p>
                                                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                                            </div>
                                        </div>
                                        <div className="chat-element ">
                                            <a href="#" className="pull-left">
                                                <img alt="image" className="img-circle" src="img/a2.jpg"/>
                                            </a>
                                            <div className="media-body ">
                                                <small className="pull-right">2h ago</small>
                                                <strong>Mike Smith</strong>
                                                <p className="m-b-xs">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                </p>
                                                <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-form">
                                    <form role="form">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Message"></textarea>
                                        </div>
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-sm btn-primary m-t-n-xs"><strong>Send message</strong></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <button type="button" className="btn btn-danger m-r-sm">12</button>
                                            Total messages
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary m-r-sm">28</button>
                                            Posts
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info m-r-sm">15</button>
                                           Comments
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button type="button" className="btn btn-info m-r-sm">20</button>
                                            News
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-success m-r-sm">40</button>
                                            Likes
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger m-r-sm">30</button>
                                            Notifications
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button type="button" className="btn btn-warning m-r-sm">20</button>
                                            Albums
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-default m-r-sm">40</button>
                                            Groups
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning m-r-sm">30</button>
                                            Permissions
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="ibox-content text-center">
                                        <h1>Nicki Smith</h1>
                                        <div className="m-b-sm">
                                                <img alt="image" className="img-circle" src="img/a8.jpg"/>
                                        </div>
                                        <p className="font-bold">Consectetur adipisicing</p>
                                        <div className="text-center">
                                            <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                            <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> Love</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ibox-content">
                                        <div>
                                            <div>
                                                <span>Memory</span>
                                                <small className="pull-right">10/200 GB</small>
                                            </div>
                                            <div className="progress progress-small">
                                                <div style={{ width: '60%'}} className="progress-bar"></div>
                                            </div>
                                            <div>
                                                <span>Bandwidth</span>
                                                <small className="pull-right">20 GB</small>
                                            </div>
                                            <div className="progress progress-small">
                                                <div style={{ width: '50%'}} className="progress-bar"></div>
                                            </div>
                                            <div>
                                                <span>Activity</span>
                                                <small className="pull-right">73%</small>
                                            </div>
                                            <div className="progress progress-small">
                                                <div style={{ width: '40%'}} className="progress-bar"></div>
                                            </div>
                                            <div>
                                                <span>FTP</span>
                                                <small className="pull-right">400 GB</small>
                                            </div>
                                            <div className="progress progress-small">
                                                <div style={{ width: '20%'}} className="progress-bar progress-bar-danger"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox-content">
                            <h2>TODO List</h2>
                            <small>This is example of task list</small>
                            <ul className="todo-list m-t">
                                <li>
                                    <input type="checkbox" value="" name="" className="i-checks"/>
                                    <span className="m-l-xs">Buy a milk</span>
                                    <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 mins</small>
                                </li>
                                <li>
                                    <input type="checkbox" value="" name="" className="i-checks" checked/>
                                    <span className="m-l-xs">Go to shop and find some products.</span>
                                    <small className="label label-info"><i className="fa fa-clock-o"></i> 3 mins</small>
                                </li>
                                <li>
                                    <input type="checkbox" value="" name="" className="i-checks" />
                                    <span className="m-l-xs">Send documents to Mike</span>
                                    <small className="label label-warning"><i className="fa fa-clock-o"></i> 2 mins</small>
                                </li>
                                <li>
                                    <input type="checkbox" value="" name="" className="i-checks"/>
                                    <span className="m-l-xs">Go to the doctor dr Smith</span>
                                    <small className="label label-danger"><i className="fa fa-clock-o"></i> 42 mins</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-content">
                                <h2>TODO Small version</h2>
                                <small>This is example of small version of todo list</small>
                                <ul className="todo-list m-t small-list">
                                    <li>
                                        <a href="#" className="check-link"><i className="fa fa-check-square"></i> </a>
                                        <span className="m-l-xs todo-completed">Buy a milk</span>

                                    </li>
                                    <li>
                                        <a href="#" className="check-link"><i className="fa fa-check-square"></i> </a>
                                        <span className="m-l-xs  todo-completed">Go to shop and find some products.</span>

                                    </li>
                                    <li>
                                        <a href="#" className="check-link"><i className="fa fa-square-o"></i> </a>
                                        <span className="m-l-xs">Send documents to Mike</span>
                                        <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 mins</small>
                                    </li>
                                    <li>
                                        <a href="#" className="check-link"><i className="fa fa-square-o"></i> </a>
                                        <span className="m-l-xs">Go to the doctor dr Smith</span>
                                    </li>
                                    <li>
                                        <a href="#" className="check-link"><i className="fa fa-square-o"></i> </a>
                                        <span className="m-l-xs">Plan vacation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-t-lg">
                    <div className="col-lg-12">
                        <div className="ibox-content">
                            <h2>Word map</h2>
                            <small>This is simple example of map</small>
                            <div id="world-map" style={{ height: '300px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
