const friendNameClicked = function(friend){
    console.log(friend);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return (
        {
            type:"FRIEND_NAME_CLICKED",
            payload: friend
        }
    )
}

export default friendNameClicked