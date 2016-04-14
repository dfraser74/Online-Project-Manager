import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";
import Main from "./components/Main.jsx";
import { RelayRouter } from 'react-router-relay';
import routes from './router';
import { createHashHistory } from 'history';
import { useRouterHistory } from 'react-router';


const history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <RelayRouter history={history} routes={routes} />,
    document.getElementById('react')
);