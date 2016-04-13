import React from "react";
import CSSModules from "react-css-modules";
import SideMenuCSS from "../css/sideMenu.css";
import { Link, History } from "react-router";

class SideMenu extends React.Component {


    render() {

        return (

                <div>
                    <ul id="sideNav" className="side-nav fixed brown lighten-5 z-depth-2" styleName="sideNav">
                        <li><a href="#" styleName="menuItem"><i className="material-icons left" styleName="menuIcon">skip_previous</i>Menu</a></li>
                        <li><Link to={`/overview`} className="center-align" >Overview</Link></li>
                        <li><Link to={`/controllist`} className="center-align" >Control List</Link></li>
                        <li><Link to={`/issues`} className="center-align" >Issues</Link></li>

                    </ul>
                </div>

        );
    }
}

SideMenu = CSSModules(SideMenu, SideMenuCSS);

export default SideMenu;


