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



const AppRoute = (

    <Route path ="/" component={Main}
        queries={StoreQueries}
    >
        <IndexRoute component={Overview} />
        <Route path="/issues" component={Issues} />
        <Route path="/controllist" component={ControlList} />
    </Route>

);

export default AppRoute;

