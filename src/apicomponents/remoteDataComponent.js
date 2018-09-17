import React from 'react';
import axios from 'axios';
import DisplayUser from './displayUser';

class RemoteDataComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            users: [],
            title: "",
            description: "",
            vote: 0,
            imageUrl: "",
            avatarUrl: "",
            url: ""
        }

        this.callRemoteAPI = this.callRemoteAPI.bind(this);
        this.insertData = this.insertData.bind(this);
        this.inputTitle = this.inputTitle.bind(this);
        this.inputDesc = this.inputDesc.bind(this);
        this.inputImage = this.inputImage.bind(this);
    }

    componentWillMount() {
        //console.log("hiiiiiiiii");
        this.callRemoteAPI()
    }

    callRemoteAPI() {
        //axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("http://localhost:3002/feedback")
            .then((response) => {
                console.log(response.data);
                this.setState({ users: response.data });
                console.log("vvvvvv");
                console.log(this.state.users);
            });
    }

    inputTitle(e){
        this.setState({title: e.target.value})
    }

    inputDesc(e){
        this.setState({description: e.target.value})
    }

    inputImage(e){
        const tempPath = "../images/" + e.target.files[0].name;
        this.setState(
            {
                imageUrl: tempPath,
                avatarUrl: tempPath,
                url: "https://google.com"
            }
        )
    }

    displayData() {
        console.log("inside Display data!!");
        return (
            this.state.users.map((oneUser) => {
                //console.log(oneUser);
                return (
                    <DisplayUser key={oneUser.id}
                        id={oneUser.id}
                        title={oneUser.title}
                        description={oneUser.description}
                        vote={oneUser.vote}
                        imageUrl={oneUser.imageUrl}>
                    </DisplayUser>
                );
            })
        );
    }

    insertData(e) {

        e.preventDefault();
        const insertRecord = {
            "title": this.state.title,
            "description": this.state.description,
            "url": this.state.url,
            "imageUrl": this.state.imageUrl,
            "avatarUrl": this.state.avatarUrl,
            "vote": this.state.vote
        }
        axios.post("http://localhost:3002/feedback", insertRecord).then(
            (response) => {
                console.log(response)
            }
        )
    }

    render() {
        return (
            <div>
                Trying the remote API with React!!!
                <br></br>
                <table border="2px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>VOTE</th>
                            <th>PRODUCT IMAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayData()}
                    </tbody>
                </table>
                <br></br><br></br>
                <form onSubmit={this.insertData}>
                    <label>Title:</label>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.inputTitle} />

                    <br></br><br></br>

                    <label>Product Image:</label>
                    <input type="file"
                        onChange={this.inputImage}
                        accept="image/jpg,image/png" 
                    />
                    <br></br><br></br>

                    <label>Description:</label>
                    <textarea value={this.state.description}
                        onChange={this.inputDesc} />
                    
                    <br></br><br></br>
                    <button type="submit">Insert Using Post</button>
                </form>
            </div>
        );
    }
}

export default RemoteDataComponent;