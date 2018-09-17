import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleComponent extends React.Component {

    componentWillMount(){
        console.log("inside component will mount")
        //alert("Mounted!!!!!!!!!!!!!!!");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    componentDidMount(){
        console.log("displayed after mounted");
    }

    componentWillUpdate(){
        console.log("component update: after state change!!!");
    }
    componentDidUpdate(){
        console.log("after update occurs");
    }

    unMountMe() {
        ReactDOM.unmountComponentAtNode(document.getElementById(""));
    }

    render(){

        return (
            <div>
                  Just observing how the life cycle working!!!
            </div>
        );
    }
}

export default LifeCycleComponent;