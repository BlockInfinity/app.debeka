import React, { Component } from 'react';

class MyEnergySystems extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Basic Table</h5>
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
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Striped Table </h5>
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
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Data</th>
                                        <th>User</th>
                                        <th>Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><span className="line">5,3,2,-1,-3,-2,2,3,5,2</span></td>
                                        <td>Samantha</td>
                                        <td className="text-navy"> <i className="fa fa-level-up"></i> 40% </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><span className="line">5,3,9,6,5,9,7,3,5,2</span></td>
                                        <td>Jacob</td>
                                        <td className="text-warning"> <i className="fa fa-level-down"></i> -20% </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><span className="line">1,6,3,9,5,9,5,3,9,6,4</span></td>
                                        <td>Damien</td>
                                        <td className="text-navy"> <i className="fa fa-level-up"></i> 26% </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Border Table </h5>
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
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Hover Table  </h5>
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
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Data</th>
                                        <th>User</th>
                                        <th>Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><span className="pie">0.52,1.041</span></td>
                                        <td>Samantha</td>
                                        <td className="text-navy"> <i className="fa fa-level-up"></i> 40% </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><span className="pie">226,134</span></td>
                                        <td>Jacob</td>
                                        <td className="text-warning"> <i className="fa fa-level-down"></i> -20% </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><span className="pie">0.52/1.561</span></td>
                                        <td>Damien</td>
                                        <td className="text-navy"> <i className="fa fa-level-up"></i> 26% </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Custom responsive table </h5>
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
                                <div className="row">
                                    <div className="col-sm-5 m-b-xs"><select className="input-sm form-control input-s-sm inline">
                                        <option value="0">Option 1</option>
                                        <option value="1">Option 2</option>
                                        <option value="2">Option 3</option>
                                        <option value="3">Option 4</option>
                                    </select>
                                    </div>
                                    <div className="col-sm-4 m-b-xs">
                                        <div data-toggle="buttons" className="btn-group">
                                            <label className="btn btn-sm btn-white"> <input type="radio" id="option1" name="options"/> Day </label>
                                            <label className="btn btn-sm btn-white active"> <input type="radio" id="option2" name="options"/> Week </label>
                                            <label className="btn btn-sm btn-white"> <input type="radio" id="option3" name="options"/> Month </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="input-group"><input type="text" placeholder="Search" className="input-sm form-control"/> <span className="input-group-btn">
                                            <button type="button" className="btn btn-sm btn-primary"> Go!</button> </span></div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Project </th>
                                            <th>Completed </th>
                                            <th>Task</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><input type="checkbox"  checked className="i-checks" name="input[]"/></td>
                                            <td>Project<small>This is example of project</small></td>
                                            <td><span className="pie">0.52/1.561</span></td>
                                            <td>20%</td>
                                            <td>Jul 14, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" className="i-checks" name="input[]"/></td>
                                            <td>Alpha project</td>
                                            <td><span className="pie">6,9</span></td>
                                            <td>40%</td>
                                            <td>Jul 16, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" className="i-checks" name="input[]"/></td>
                                            <td>Betha project</td>
                                            <td><span className="pie">3,1</span></td>
                                            <td>75%</td>
                                            <td>Jul 18, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" className="i-checks" name="input[]"/></td>
                                            <td>Gamma project</td>
                                            <td><span className="pie">4,9</span></td>
                                            <td>18%</td>
                                            <td>Jul 22, 2013</td>
                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyEnergySystems
