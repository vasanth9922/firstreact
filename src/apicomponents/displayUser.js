import React from 'react';
import axios from 'axios';

class DisplayUser extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.description}</td>
                <td>{this.props.vote}</td>
                <td><img height="60" width="70" src={this.props.imageUrl}/></td>
            </tr>
        );
    }
}

export default DisplayUser;
