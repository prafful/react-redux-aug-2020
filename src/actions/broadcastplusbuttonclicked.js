const { default: friendNameClicked } = require("./friendnameclicked");

const broadcastPlusButtonClicked = function(friendlikes){
    console.log("Received friendlikes in action broadcaster....");
    console.log(friendlikes);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'PLUS_BUTTON_CLICKED',
        payload:friendlikes
    })

}

export default broadcastPlusButtonClicked