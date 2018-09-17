import React from 'react'

class SecondComponent extends React.Component {

    render(){
        return (
            <div>
                <h1>Hello from {this.props.children}, {this.props.location}</h1>
            </div>
        );
    }
}

export default SecondComponent;