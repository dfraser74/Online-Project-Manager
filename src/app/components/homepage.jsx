import React from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import HomepageCSS from '../css/homepage.css';
import { Link, History } from "react-router";


class Homepage extends React.Component {

    componentWillMount(){
    document.body.style.backgroundColor = "#efebe9";
    }
    componentWillUnmount(){
    document.body.style.backgroundColor = "#ffffff";
    }

    render() {
        return (
            <div className="container center-align">
                <div className="row">
                    <div className="center-align" >
                        <h2 className="thin" styleName="headerFont" >Auff-line Projekt Manager</h2>
                    </div>
                    <Link to="/main">
                        <div className="card grey darken-1 hoverable" styleName="card" >
                            <div className="card-content white-text">
                                <span className="card-title">SOX-2 COMPLIANCE AUDIT</span>
                                <p>Project operation primarily focus on code commit compliance
                                    as well as development control</p>
                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        )
    }

}

Homepage = CSSModules(Homepage, HomepageCSS);

export default Homepage;