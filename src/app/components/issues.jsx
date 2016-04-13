import React from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import IssuesCSS from '../css/issues.css';


class Issues extends React.Component {

    render(){

        return (
            <div styleName="viewContent">
                <ul className="collapsible popout collapsible-accordion" data-collapsible="accordion">
                    <li>
                        <div className="collapsible-header active"><div className="secondary-content">{this.props.issues.impact}: {this.props.issues.impVal}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.issues.severity}: {this.props.issues.sevVal}</div>
                            <i className="material-icons">library_books</i>{this.props.issues.issueName}</div>
                        <div className="collapsible-body"><p>severity major</p></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">library_books</i>Issue Two</div>
                        <div className="collapsible-body"><p>severity major</p></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">library_books</i>Issue Three</div>
                        <div className="collapsible-body"><p>severity major</p></div>
                    </li>

                </ul>
            </div>
        )
    }

}

Issues=CSSModules(Issues, IssuesCSS);


Issues = Relay.createContainer(Issues, {
    fragments: {
        issues: () => Relay.QL`
       fragment on Issues {
            severity,
            sevVal,
            impact,
            impVal,
            issueName,
       }
       `
    }
});

export default Issues;
