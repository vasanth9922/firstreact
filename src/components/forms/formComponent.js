import React from 'react';
import ReactDOM from 'react-dom';

class FormComponent extends React.Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(this.input.value);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" ref={(input)=> this.input = input} />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default FormComponent;