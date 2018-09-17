import React from 'react';
import NameComponent from './nameComponent';
import ButtonComponent from './buttonComponent';
import CommentText from './commentText';

class CommentComponent extends React.Component {

    render(){
        return(
            <div>
                <NameComponent >{this.props.name}</NameComponent>
                <CommentText>{this.props.children}}</CommentText>
                <ButtonComponent></ButtonComponent>
            </div>
        );
    }
}

export default CommentComponent;