

const broadcastMinusButtonClicked = function(friendlikes){
    console.log("Received friendlikes in action broadcaster....");
    console.log(friendlikes);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'MINUS_BUTTON_CLICKED',
        payload:friendlikes
    })

}

export default broadcastMinusButtonClicked