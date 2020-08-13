import React from 'react';
import { connect } from 'react-redux';

class FriendDetail extends React.Component {

    getCountFromPropsOtherFriend =()=>{
        console.log("Received otherfriend as prop in FriendDetail container....")
        console.log(this.props.otherfriend);
        let of = this.props.otherfriend.find(f=>{
            return f.id == this.props.friend.id
        })
        return of.otherfriends
    }

    getLikesFromPropsOtherFriend =()=>{
        console.log("Received likes as prop in FriendDetail container....")
        console.log(this.props.likes);
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
                    <h3>Click on any friend above to see detail....</h3>
                </div>
            )
        }else{
            return ( 
                <div>
                    Click friend above to see detail:
                    <br></br>
                    <ol>
                        <li>Full Name: {this.props.friend.name}</li>
                        <li>Location: {this.props.friend.location} </li>
                        <li>Friend Since: {this.props.friend.since} </li>
                        <li>Likes: {this.getLikesFromPropsOtherFriend()} </li>
                        <li>Other Friends: {this.getCountFromPropsOtherFriend()}</li>
                    </ol>
                </div>
             );
        }

        
    }
}


function convertStoreToPropsForFriendDetail(store){
    console.log("FriendDetail has received store....")
    console.log(store);
    return {
        friend: store.friendclicked,
        otherfriend: store.otherfriends,
        likes: store.allfriendslikes
    }
}
 
export default connect(convertStoreToPropsForFriendDetail)(FriendDetail)