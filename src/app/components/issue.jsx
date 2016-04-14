import React from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';


class Issue extends React.Component {
    render() {
        let { severity, sevVal, impact, impVal, issueName } = this.props.issue;
        return (
            <li key={issueName}>
                <div className="collapsible-header active"><div className="secondary-content">{impact}: {impVal}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{severity}: {sevVal}</div>
                    <i className="material-icons">library_books</i>{issueName}</div>
                <div className="collapsible-body"><p>severity major</p></div>
            </li>

        )
    }

};


Issue = Relay.createContainer(Issue, {
   fragments: {
       issue: ()=> Relay.QL`
            fragment on Issue {
            severity,
            sevVal,
            impact,
            impVal,
            issueName,
            }
       `
   }
});

export default Issue;