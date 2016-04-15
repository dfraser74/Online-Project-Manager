import React from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import IssuesCSS from '../css/issues.css';
import Issue from "./issue.jsx";



class Issues extends React.Component {


    render(){

        return (
            <div styleName="viewContent">
                <ul className="collapsible popout" data-collapsible="accordion">
                    {this.props.issuesStore.issues.map(
                        issue => <Issue issue={issue} />
                    )}

                </ul>
            </div>
        )
    }

}

Issues=CSSModules(Issues, IssuesCSS);


Issues = Relay.createContainer(Issues, {
    fragments: {
        issuesStore: () => Relay.QL`
       fragment on IssuesStore {
            issues { ${Issue.getFragment('issue') }},
       }
       `
    }
});

export default Issues;
