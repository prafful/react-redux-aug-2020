import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import broadcastPlusButtonClicked from '../actions/broadcastplusbuttonclicked';
import broadcastMinusButtonClicked from '../actions/broadcastminusbuttonclicked';

class FriendLikes extends React.Component {

    getLikesFromProps=()=>{
        console.log("Received likes as prop in FriendLike container....")
        console.log(this.props.likes);
        console.log("Received friendclicked as prop in FriendLike container....")
        console.log(this.props.friend);
        let friendlikes = this.props.likes.find(f=>{
            return f.id == this.props.friend.id
        })
        console.log(friendlikes);
        return friendlikes.likes  
    }

    getLikeObject=()=>{
        console.log("Preparing to broadcast payload for likes....")
        console.log(this.props.likes);
        console.log("Clicked on + button in FriendLikes container....")
        console.log(this.props.friend);
        let friendlikes = this.props.likes.find(f=>{
            return f.id == this.props.friend.id
        })
        console.log(friendlikes);
        return friendlikes 
    }
    
    render() { 
        if(this.props.friend === null){
            return (
                <div>
                    <h3>Click on friend to change likes!!!!</h3>
                </div>
            )
        }
        else{
        return ( 
            <div>
                I will change number of likes for given friend:
                <br></br>
                <button onClick={()=>this.props.plusClicked(this.getLikeObject())}>+</button>
                &nbsp; { this.getLikesFromProps()  }
                <button onClick={()=>this.props.minusClicked(this.getLikeObject())}>-</button>
            </div>
          )
        }
    }
}

function convertStoreToPropsForFriendLikesContainer(store){
    console.log("Received store in FriendLike container....");
    console.log(store);
    return {
        likes: store.allfriendslikes,
        friend: store.friendclicked
    }
}

function convertEventToPropsAndDispatchFromFriendLikesContainer(dispatch){
    return bindActionCreators({
        plusClicked: broadcastPlusButtonClicked,
        minusClicked : broadcastMinusButtonClicked
    }, dispatch)
}
 
export default  connect(convertStoreToPropsForFriendLikesContainer, convertEventToPropsAndDispatchFromFriendLikesContainer)(FriendLikes);