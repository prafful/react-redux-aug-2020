import React from 'react';
import { connect } from 'react-redux';

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
                <button>+</button>
                &nbsp; { this.getLikesFromProps()  }
                <button>-</button>
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
 
export default  connect(convertStoreToPropsForFriendLikesContainer)(FriendLikes);