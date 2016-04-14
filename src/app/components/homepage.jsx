import React from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import HomepageCSS from '../css/homepage.css';


class Homepage extends React.Component {

    render() {
        return (
            <div styleName="viewContent">
               <h1>test1</h1>
            </div>
        )
    }

}

Homepage = CSSModules(Homepage, HomepageCSS);

export default Homepage;