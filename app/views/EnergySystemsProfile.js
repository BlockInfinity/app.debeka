import React, { Component } from 'react';

class EnergySystemsProfile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-9">
                    <div className="wrapper wrapper-content animated fadeInUp">
                        <div className="ibox">
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="m-b-md">
                                            <a href="#" className="btn btn-white btn-xs pull-right">Edit project</a>
                                            <h2>Contract with Zender Company</h2>
                                        </div>
                                        <dl className="dl-horizontal">
                                            <dt>Status:</dt> <dd><span className="label label-primary">Active</span></dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <dl className="dl-horizontal">
                                            <dt>Created by:</dt> <dd>Alex Smith</dd>
                                            <dt>Messages:</dt> <dd>  162</dd>
                                            <dt>Client:</dt> <dd><a href="#" className="text-navy"> Zender Company</a> </dd>
                                            <dt>Version:</dt> <dd>  v1.4.2 </dd>
                                        </dl>
                                    </div>
                                    <div className="col-lg-7" id="cluster_info">
                                        <dl className="dl-horizontal" >
                                            <dt>Last Updated:</dt> <dd>16.08.2014 12:15:57</dd>
                                            <dt>Created:</dt> <dd>  10.07.2014 23:36:57 </dd>
                                            <dt>Participants:</dt>
                                            <dd className="project-people">
                                            <a href=""><img alt="image" className="img-circle" src="img/a3.jpg"/></a>
                                            <a href=""><img alt="image" className="img-circle" src="img/a1.jpg"/></a>
                                            <a href=""><img alt="image" className="img-circle" src="img/a2.jpg"/></a>
                                            <a href=""><img alt="image" className="img-circle" src="img/a4.jpg"/></a>
                                            <a href=""><img alt="image" className="img-circle" src="img/a5.jpg"/></a>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <dl className="dl-horizontal">
                                            <dt>Completed:</dt>
                                            <dd>
                                                <div className="progress progress-striped active m-b-sm">
                                                    <div style={{width: "60%"}} className="progress-bar"></div>
                                                </div>
                                                <small>Project completed in <strong>60%</strong>. Remaining close the project, sign a contract and invoice.</small>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="row m-t-sm">
                                    <div className="col-lg-12">
                                        <div className="panel blank-panel">
                                            <div className="panel-heading">
                                                <div className="panel-options">
                                                    <ul className="nav nav-tabs">
                                                        <li className="active"><a href="#tab-1" data-toggle="tab">Users messages</a></li>
                                                        <li className=""><a href="#tab-2" data-toggle="tab">Last activity</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body">
                                                <div className="tab-content">
                                                    <div className="tab-pane active" id="tab-1">
                                                        <div className="feed-activity-list">
                                                            <div className="feed-element">
                                                                <a href="#" className="pull-left">
                                                                    <img alt="image" className="img-circle" src="img/a2.jpg"/>
                                                                </a>
                                                                <div className="media-body ">
                                                                    <small className="pull-right">2h ago</small>
                                                                    <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br/>
                                                                    <small className="text-muted">Today 2:10 pm - 12.06.2014</small>
                                                                    <div className="well">
                                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="feed-element">
                                                                <a href="#" className="pull-left">
                                                                    <img alt="image" className="img-circle" src="img/a3.jpg"/>
                                                                </a>
                                                                <div className="media-body ">
                                                                    <small className="pull-right">2h ago</small>
                                                                    <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>. <br/>
                                                                    <small className="text-muted">2 days ago at 8:30am</small>
                                                                </div>
                                                            </div>
                                                            <div className="feed-element">
                                                                <a href="#" className="pull-left">
                                                                    <img alt="image" className="img-circle" src="img/a4.jpg"/>
                                                                </a>
                                                                <div className="media-body ">
                                                                    <small className="pull-right text-navy">5h ago</small>
                                                                    <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br/>
                                                                    <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                                                    <div className="actions">
                                                                        <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                                                        <a className="btn btn-xs btn-white"><i className="fa fa-heart"></i> Love</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="feed-element">
                                                                <a href="#" className="pull-left">
                                                                    <img alt="image" className="img-circle" src="img/a5.jpg"/>
                                                                </a>
                                                                <div className="media-body ">
                                                                    <small className="pull-right">2h ago</small>
                                                                    <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br/>
                                                                    <small className="text-muted">Yesterday 5:20 pm - 12.06.2014</small>
                                                                    <div className="well">
                                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="feed-element">
                                                                <a href="#" className="pull-left">
                                                                    <img alt="image" className="img-circle" src="img/profile.jpg"/>
                                                                </a>
                                                                <div className="media-body ">
                                                                    <small className="pull-right">23h ago</small>
                                                                    <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br/>
                                                                    <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                                                </div>
                                                            </div>
                                                            <div className="feed-element">
                                                                <a href="#" className="pull-left">
                                                                    <img alt="image" className="img-circle" src="img/a7.jpg"/>
                                                                </a>
                                                                <div className="media-body ">
                                                                    <small className="pull-right">46h ago</small>
                                                                    <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br/>
                                                                    <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab-2">
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Title</th>
                                                                <th>Start Time</th>
                                                                <th>End Time</th>
                                                                <th>Comments</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Completed</span>
                                                                </td>
                                                                <td>
                                                                   Create project in webapp
                                                                </td>
                                                                <td>
                                                                   12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                <p className="small">
                                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.
                                                                </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Accepted</span>
                                                                </td>
                                                                <td>
                                                                    Various versions
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Sent</span>
                                                                </td>
                                                                <td>
                                                                    There are many variations
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Reported</span>
                                                                </td>
                                                                <td>
                                                                    Latin words
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        Latin words, combined with a handful of model sentence structures
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Accepted</span>
                                                                </td>
                                                                <td>
                                                                    The generated Lorem
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Sent</span>
                                                                </td>
                                                                <td>
                                                                    The first line
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Reported</span>
                                                                </td>
                                                                <td>
                                                                    The standard chunk
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Completed</span>
                                                                </td>
                                                                <td>
                                                                    Lorem Ipsum is that
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="label label-primary"><i className="fa fa-check"></i> Sent</span>
                                                                </td>
                                                                <td>
                                                                    Contrary to popular
                                                                </td>
                                                                <td>
                                                                    12.07.2014 10:10:1
                                                                </td>
                                                                <td>
                                                                    14.07.2014 10:16:36
                                                                </td>
                                                                <td>
                                                                    <p className="small">
                                                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="wrapper wrapper-content project-manager">
                        <h4>Project description</h4>
                        <img src="img/zender_logo.png" className="img-responsive"/>
                        <p className="small">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        </p>
                        <p className="small font-bold">
                            <span><i className="fa fa-circle text-warning"></i> High priority</span>
                        </p>
                        <h5>Project tag</h5>
                        <ul className="tag-list" style={{padding: 0}}>
                            <li><a href=""><i className="fa fa-tag"></i> Zender</a></li>
                            <li><a href=""><i className="fa fa-tag"></i> Lorem ipsum</a></li>
                            <li><a href=""><i className="fa fa-tag"></i> Passages</a></li>
                            <li><a href=""><i className="fa fa-tag"></i> Variations</a></li>
                        </ul>
                        <h5>Project files</h5>
                        <ul className="list-unstyled project-files">
                            <li><a href=""><i className="fa fa-file"></i> Project_document.docx</a></li>
                            <li><a href=""><i className="fa fa-file-picture-o"></i> Logo_zender_company.jpg</a></li>
                            <li><a href=""><i className="fa fa-stack-exchange"></i> Email_from_Alex.mln</a></li>
                            <li><a href=""><i className="fa fa-file"></i> Contract_20_11_2014.docx</a></li>
                        </ul>
                        <div className="text-center m-t-md">
                            <a href="#" className="btn btn-xs btn-primary">Add files</a>
                            <a href="#" className="btn btn-xs btn-primary">Report contact</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EnergySystemsProfile
