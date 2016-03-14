import React from "react";
import ReactDOM from "react-dom";
import SideMenu from "./components/sideMenu.jsx";
import Overview from "./components/overview.jsx";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div style={{display:"block", backgroundColor:"#bdbdbd", height:"50px", zIndex:"999"}}>
                    <div className="nav-wrapper" style={{marginLeft:"50px"}}>
                        <a className="page-title white-text" style={{fontSize:"200%"}}>Auf-line Projekt Manager</a>
                    </div>
                </div>

                <div className="row" style={{marginBottom:"0"}}>

                    <div className="col s3">
                       <SideMenu />
                    </div>
                    <div className="col s9" style={{boxShadow: "0 0 15px 0px rgba(0, 0, 0, 0.14)", height:"100%", marginBottom:"0", paddingBottom:"0"}}>
                        <Overview />
                    </div>
                </div>

            </div>
        );
    }
}


ReactDOM.render(
    <Main />, document.getElementById('react')
);