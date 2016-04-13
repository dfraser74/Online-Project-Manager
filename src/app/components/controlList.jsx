import React from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import ControlListCSS from '../css/controlList.css';



class ControlList extends React.Component {

    render(){

        return (
            <div styleName="viewContent">
                <ul className="collection" >
                    <li className="collection-item avatar">
                        <img styleName="avatar" src="assets/images/acl.png" alt="" className="circle" />
                        <span className="title">title1</span>
                        <p><a>Walkthrough</a> <br />
                            Q1 Testing
                        </p>
                        <div className="secondary-content valign-wrapper"><i className="material-icons" styleName="email">email</i>
                            <div className="title" styleName="request">Contains Client Request</div> </div>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons">label_outline</i>
                        <span className="title"></span>
                        <p>Walkthrough <br />
                            Q1 Testing
                        </p>

                    </li>


                </ul>
            </div>
        )
    }

}

ControlList=CSSModules(ControlList, ControlListCSS);


//ControlList = Relay.createContainer(ControlList, {
//    fragments: {
//        controlList: () => Relay.QL`
//       fragment on ControlList {
//            severity,
//            sevVal,
//            impact,
//            impVal,
//            issueName,
//       }
//       `
//    }
//});

export default ControlList;
