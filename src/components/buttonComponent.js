import React from 'react';

class ButtonComponent extends React.Component {

    constructor(){
        super();
        this.state={
            like:3,
            unlike:4
        }

        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleLike=function() {
        console.log("Liked")
        this.setState(
            {
                like:this.state.like+1
            }
        );
    }

    handleUnlike(){
        console.log("Unliked")
        this.setState(
            {
                unlike:this.state.unlike+1
            }
        );
    }

    render(){
        return(
            <div>
                <button onClick={this.handleLike}>Like{this.state.like}</button>
                <button onClick={this.handleUnlike}>Dislike{this.state.unlike}</button>
            </div>
        );
    }
}

export default ButtonComponent;