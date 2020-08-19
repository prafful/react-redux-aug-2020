export default function otherFriendsReducer(state = null, action){
    var otherfriends =  [
        {
            id: 1,
            otherfriends: 15
        },
        {
            id: 2,
            otherfriends: 10
        },
        {
            id: 3,
            otherfriends: 18
        },
        {
            id: 4,
            otherfriends: 22
        }
    ]

    switch (action.type) {
        case "NEW_FRIEND":
            console.log('add otherfriends for new friend....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newotherfriends = [{ id:length+1, otherfriends: action.payload.otherfriends   }, ...state]
            return newotherfriends
    
        default:
            break;
    }


    return otherfriends
}