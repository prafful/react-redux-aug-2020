

const friendNameClickedReducer = function friendNameClicked(state = null, action){
    console.log("Broadcast action received from friendnameclicked....")
    console.log(action);
    switch (action.type) {
        case "FRIEND_NAME_CLICKED":
            console.log("Action with payload received in reducer!")
            console.log(action.payload);
            return action.payload
        case "ALL_BLOGS":
            return state             
    
        default:
            break;
    }

   return state

}

export default friendNameClickedReducer