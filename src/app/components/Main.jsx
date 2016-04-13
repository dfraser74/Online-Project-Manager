import React from "react";
import Relay from "react-relay";
import SideMenu from "./sideMenu.jsx";
import Overview from "./overview.jsx";
import MainCSS from "../css/Main.css";
import CSSModules from 'react-css-modules';
import Issues from "./issues.jsx";

class Main extends React.Component {


    render() {
        //let Test;
        //if(this.props.children){
           let Test= this.props.children;
        //} else {
            //Test = <Overview overview={this.props.store.overview[0]} />;
        //}

        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper grey darken-1">
                            <a href="#" className="brand-logo" styleName='brandLogo'>Auff-line Projeck Manager</a>
                        </div>
                    </nav>
                </div>

                <div>
                    <SideMenu />
                </div>
                <div>
                    {Test}

                </div>


            </div>
        );
    }
}

Main = CSSModules(Main, MainCSS);

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
