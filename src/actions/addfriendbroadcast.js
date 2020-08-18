

const addFriendBroadcast = function(friend){
    console.log("Received new friend in action broadcaster....");
    console.log(friend);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'NEW_FRIEND',
        payload:friend
    })

}

export default addFriendBroadcast