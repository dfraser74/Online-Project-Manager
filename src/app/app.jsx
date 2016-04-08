import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";
import Main from "./components/Main.jsx";
import { RelayRouter } from 'react-router-relay';
import routes from './router';
import { createHashHistory } from 'history';
import { useRouterHistory } from 'react-router';



//class HomeRoute extends Relay.Route {
//    static routeName = 'Home';
//    static queries = {
//        store: (Component)=> Relay.QL`
//        query Query {
//            store { ${Component.getFragment('store')} }
//        }
//        `
//    };
//
//}


//ReactDOM.render(
//    <Relay.RootContainer
//        Component = {Main}
//        route = {new HomeRoute()}
//    />, document.getElementById('react')
//);

const history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <RelayRouter history={history} routes={routes} />,
    document.getElementById('react')
);