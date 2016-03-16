import React from 'react';
import Relay from 'react-relay';


class Overview extends React.Component {

    render() {

        return(
            <div className="row" style={{margin:"25px"}}>
                <form className="col s12">
                    <div className="row">

                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_title" type="text" className="truncate"> </input>
                                <label htmlFor="overview_title" >Title</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_description" type="text" className="truncate"> </input>
                            <label htmlFor="overview_description" >Description</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_reference" type="text" className="truncate"> </input>
                            <label htmlFor="overview_reference" >Reference</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_div" type="text" className="truncate"> </input>
                            <label htmlFor="overview_div" >Division/Department</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_owner" type="text" className="truncate"> </input>
                            <label htmlFor="overview_owner" >Owner</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_exec" type="text" className="truncate"> </input>
                            <label htmlFor="overview_exec" >Executive Owner</label>
                        </div>
                        <div className="input-field col s12" style={{marginBottom:"25px"}}>
                            <input id="overview_assigned" type="text" className="truncate"> </input>
                            <label htmlFor="overview_assigned" >Assigned Auditor</label>
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

Overview = Relay.createContainer(Overview, {
    fragments: {
        overview: () => Relay.QL`
       fragment on Overview {
            exec,
            title
       }
       `,
    },
});

export default Overview;