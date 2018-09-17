import React from 'react';

class MainComponent extends React.Component {

    render(){
        return(
            <div>
                <div>Hello From {this.props.children}, {this.props.location} </div>
            </div>
        );
    }
}

export default MainComponent;