import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";
import Main from "./components/Main.jsx";

class HomeRoute extends Relay.Route {
    static routeName = 'Home';
    static queries = {
        store: (Component)=> Relay.QL`
        query Query {
            store { ${Component.getFragment('store')} }
        }
        `
    };

}


ReactDOM.render(
    <Relay.RootContainer
        Component = {Main}
        route = {new HomeRoute()}
    />, document.getElementById('react')
);