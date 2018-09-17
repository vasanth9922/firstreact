import React from 'react';

class ControlledForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            prgrming: false
         }

         this.handleNameChange = this.handleNameChange.bind(this);
         this.handlePrgrmChange = this.handlePrgrmChange.bind(this);
         this.submitForm = this.submitForm.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        );
    }

    handleNameChange(e) {
        this.setState(
            {
                name: e.target.value
            }
        );
    }

    handlePrgrmChange(e){
        this.setState(
            {
                prgrming: e.target.checked,
            }
        );
    }

    submitForm(e){
        e.preventDefault();
        console.log("cmiitted success!!!!!!")
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>

                <h1>Its a controlled form.!</h1>

                Name: <input type="text" name = "name"
                                value={this.state.name} 
                                onChange={this.handleChange} />
                                <br></br><br></br>
                Know programming:<input type="checkbox" 
                                name="prgrming"
                                value={this.state.prgrming} 
                                onChange={this.handlePrgrmChange}/>
                
                <br></br><br></br>
                <button type="submit">Submit</button>
                
                </form>
            </div>
        );
    }
}

export default ControlledForm;