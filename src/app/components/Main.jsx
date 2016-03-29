import React from "react";
import Relay from "react-relay";
import SideMenu from "./sideMenu.jsx";
import Overview from "./overview.jsx";

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
                        <Overview overview={this.props.store.overview[0]} />
                    </div>
                </div>

            </div>
        );
    }
}

Main = Relay.createContainer(Main, {
    fragments: {
        store: () => Relay.QL`
       fragment on Store {

           overview {${Overview.getFragment('overview')} }
       }
       `

    }
});

export default Main;
