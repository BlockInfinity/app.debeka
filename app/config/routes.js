import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';

import EnergySystemsListView from '../views/EnergySystemsList';
import EnergySystemsNewView from '../views/EnergySystemsNew';
import EnergySystemsProfileView from '../views/EnergySystemsProfile';
import DashboardView from '../views/Dashboard';
import MyEnergySystemsView from '../views/MyEnergySystems';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={DashboardView}> </Route>
            <Route path="myEnergySystems" component={MyEnergySystemsView}> </Route>
            <Route path="energySystemsList" component={EnergySystemsListView}> </Route>
            <Route path="energySystemsProfile" component={EnergySystemsProfileView}> </Route>
            <Route path="energySystemsNew" component={EnergySystemsNewView}> </Route>
            <Route path="main" component={MainView}> </Route>
        </Route>
    </Router>
);
