import React from "react";

class SideMenu extends React.Component {
    render() {
        return (

                <div>
                    <a className="btn blue-grey lighten-5 waves-effect waves-ripple z-depth-3 black-text" style={{display: "block", margin: "50px 0 0 0", paddingRight:"60px", borderRadius:"7px"}}><i className="material-icons left">fast_rewind</i>Menu</a>
                    <a className="btn blue-grey lighten-5 waves-effect waves-ripple z-depth-3 center-align black-text" style={{display: "block", margin: "25px 0 0 0", borderRadius:"7px"}}>Overview</a>
                    <a className="btn blue-grey lighten-5 waves-effect waves-ripple z-depth-3 center-align black-text" style={{display: "block", margin: "5px 0 0 0", borderRadius:"7px"}}>Control List</a>
                    <a className="btn blue-grey lighten-5 waves-effect waves-ripple z-depth-3 center-align black-text" style={{display: "block", margin: "5px 0 0 0", borderRadius:"7px"}}>Issues</a>
                </div>

        );
    }
}

export default SideMenu;


