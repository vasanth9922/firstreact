import React from 'react';

class NameComponent extends React.Component {

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default NameComponent;