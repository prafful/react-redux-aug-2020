import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import friendNameClicked from '../actions/friendnameclicked';

class FriendList extends React.Component {


    displayPropsReceivedFromStore=()=>{
        console.log("Received props from store -> friends");
        return this.props.friends.map(f=>{
            return (
                <li key={f.id} onClick={()=>this.props.clickFriendName(f)}>
                    {f.name}
                </li>
            )

        })
    }
    
    render() { 
        return ( 
            <div>
                I will list all friends:
                <br></br>
                <ol>
                   {this.displayPropsReceivedFromStore()}
                </ol>
            </div>
         );
    }
}

//function to convert store to props so that FriendList can consume it!
function convertStoreToProps(store){
    console.log('Received complete store....in FriendList container');
    console.log(store);
    //Identify the data from store which FriendList container can consume.
    //FriendList will consume extracted data as props!!!!
    return {
        friends: store.allfriends
    }
}

function convertEventToPropsAndDispatch(dispatch){
    //console.log("Received the nameclicked event as props in FriendList.... ")
    return bindActionCreators({
        clickFriendName: friendNameClicked
    }, dispatch)

}
 
export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(FriendList);