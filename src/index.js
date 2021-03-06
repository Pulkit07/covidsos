/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "assets/plugins/mapbox-gl/mapbox-gl.css";
import "assets/css/custom.css";
import 'react-notifications/lib/notifications.css';

import AdminLayout from "layouts/Admin.js";
import MapViewLayout from "layouts/MapViewLayout.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/mapView" render={props => <MapViewLayout {...props} />} />
      <Route path="/" render={props => <AdminLayout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
