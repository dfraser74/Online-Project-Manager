import React from 'react';


class Rootpage extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}



export default Rootpage;