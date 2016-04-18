import React from 'react';
import Relay from 'react-relay';
import CreateOverviewMutation from '../mutations/CreateOverviewMutation';
import {debounce} from "lodash";
import CSSModules from "react-css-modules";
import OverviewCSS from "../css/overview.css";


class Overview extends React.Component {

    constructor(props){
        super(props);

       // this.handleChange= debounce(this.handleChange, 2000);
    }

    handleChange = (e) => {
        e.preventDefault();

        Relay.Store.commitUpdate(
            new CreateOverviewMutation({
                overview: this.props.overview,
                exec: this.refs.newExec.value,
                description: this.refs.newDes.value,
                title: this.refs.newTitle.value,
                division: this.refs.newDiv.value,
                owner: this.refs.newOwner.value,
                reference: this.refs.newRef.value
            })
        );

    }

    render() {

        return(

            <div className="row" styleName="viewContent">
                <form className="col s12">
                    <div className="row">


                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_title" type="text" className="truncate" defaultValue={this.props.overview.title} ref="newTitle" onBlur={this.handleChange} />
                                <label htmlFor="overview_title" className="active">Title</label>
                        </div>

                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_description" type="text" className="truncate" defaultValue={this.props.overview.description} ref="newDes" onBlur={this.handleChange} > </input>
                            <label htmlFor="overview_description" className="active">Description</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_reference" type="text" className="truncate" defaultValue={this.props.overview.reference} ref="newRef" onBlur={this.handleChange} > </input>
                            <label htmlFor="overview_reference" className="active">Reference</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_div" type="text" className="truncate" defaultValue={this.props.overview.division} ref="newDiv" onBlur={this.handleChange} > </input>
                            <label htmlFor="overview_div" className="active">Division/Department</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_owner" type="text" className="truncate" defaultValue={this.props.overview.owner} ref="newOwner" onBlur={this.handleChange} > </input>
                            <label htmlFor="overview_owner" className="active">Owner</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_exec" type="text" className="truncate" defaultValue={this.props.overview.exec} ref="newExec" onBlur={this.handleChange}> </input>
                            <label htmlFor="overview_exec" className="active">Executive Owner</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_assigned" type="text" className="truncate" defaultValue={this.props.overview.assigned} ref="newAssign" onBlur={this.handleChange} > </input>
                            <label htmlFor="overview_assigned" className="active">Assigned Auditor</label>
                        </div>

                        <div>
                            <label className="grey-text" style={{paddingLeft:"11px", fontSize:"15"}}>Assigned Auditor</label>
                        <div  style={{marginLeft:"45px", display:"inline"}}>
                            <a className='dropdown-button btn white grey-text' href='' data-activates='overview_assignedAuditor'>Auditor</a>


                        <ul id='overview_assignedAuditor' className='dropdown-content'>
                            <li><a className="grey-text" href="">AuditorA</a></li>
                            <li><a className="grey-text" href="">AuditorB</a></li>
                            <li><a className="grey-text" href="">AuditorC</a></li>
                        </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            );
    }
}

Overview = CSSModules(Overview, OverviewCSS);


Overview = Relay.createContainer(Overview, {
    fragments: {
        overview: () => Relay.QL`
       fragment on Overview {
            title,
            exec,
            description,
            reference,
            division,
            owner,
            assigned,
       }
       `
    }
});

export default Overview;