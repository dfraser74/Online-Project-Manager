/**
 * Created by williehuang on 2016-04-04.
 */
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Overview from "../components/overview.jsx";
import ControlList from "../components/controlList.jsx";
import Issues from "../components/issues.jsx";
import Main from "../components/Main.jsx";

import Relay from "react-relay";

const StoreQueries = {
    store: (Component) => Relay.QL`
    query Query {
            store { ${Component.getFragment('store')} }
    }
    `
};

const OverviewQueries = {
    overview: (Component) => Relay.QL`
    query Query {

            overview { ${Component.getFragment('overview')} }

    }
    `
};

const IssuesQueries = {
    issues: (Component) => Relay.QL`
    query Query {
            issues { ${Component.getFragment('issues')} }
    }
    `
};



const AppRoute = (

    <Route path ="/" component={Main}
        queries= {StoreQueries}
    >
        <IndexRoute component={Overview} queries={OverviewQueries} />
        <Route path="/overview" component={Overview} queries={OverviewQueries} />
        <Route path="/issues" component={Issues} queries={IssuesQueries} />
        <Route path="/controllist" component={ControlList} />
    </Route>

);

export default AppRoute;

