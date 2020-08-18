import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import addFriendBroadcast from '../actions/addfriendbroadcast';

class AddFriend extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            location:'',
            since:0,
            likes:0,
            otherfriends:0
        }

    }

    captureName = (event)=>{
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }
  
    captureLocation = (event)=>{
        console.log(event.target.value);
        this.setState({location: event.target.value})
    }

    captureFriend=()=>{
        let friend = {
            name: this.state.name,
            location: this.state.location,
            since:0,
            likes:0,
            otherfriends:0
        }

        console.log(friend);
        this.props.sendNewFriend(friend)
    }

    render() { 
        return ( 
            <div>
                <h3>Add Friend</h3>
                Name: <input type="text" onChange={this.captureName}></input> {this.state.name}
                <br></br>
                Location: <input type="text" onChange={this.captureLocation}></input> {this.state.location}
                <br></br>
               <button onClick={this.captureFriend}>Add</button>
            </div>
         );
    }
}


function convertPropToEventAndBroadcast(dispatch){
    return bindActionCreators({
        sendNewFriend: addFriendBroadcast 
    }, dispatch)
}
 
export default connect(null, convertPropToEventAndBroadcast)(AddFriend)