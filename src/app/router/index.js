/**
 * Created by williehuang on 2016-04-04.
 */
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Overview from "../components/overview.jsx";
import ControlList from "../components/controlList.jsx";
import Issues from "../components/issues.jsx";
import Main from "../components/Main.jsx";
import Homepage from "../components/homepage.jsx";
import Root from "../components/root.jsx";

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
    issuesStore: (Component) => Relay.QL`
    query Query {
            issuesStore { ${Component.getFragment('issuesStore')} }
    }
    `
};



const AppRoute = (

    <Route path ="/" component={Root} >
        <IndexRoute component={Homepage} />
            <Route path="/main" component={Main} queries= {StoreQueries} >
                <IndexRoute component={Overview} queries={OverviewQueries} />
                <Route path="/overview" component={Overview} queries={OverviewQueries} />
                <Route path="/issues" component={Issues} queries={IssuesQueries} />
                <Route path="/controllist" component={ControlList} />
                <Route path="/home" component={Homepage} />
            </Route>
    </Route>

);

export default AppRoute;

