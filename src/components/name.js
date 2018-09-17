import React from 'react';
import "./index.css";

class Name extends React.Component {
    
    render(){

        let nameColor = {
            //color: "red",
            color: this.props.fontColor,
            //"background-color": "chartreuse"
            //backgroundColor: "chartreuse"
            backgroundColor: this.props.bgColor,
            float: "left",
            padding: "10px",
            margin: "2px",
            brder: "5px solid yellow",
            borderRadius: "30px"
        }
 
        return(
            //<div className="nameColor">
              //  {this.props.children}
            //</div>
            <div style={nameColor}>
                {this.props.children}
            </div>
        );
    }
}

export default Name;