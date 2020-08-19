

const myallfriendsreducer = function allFriendsReducer(state = null, action) {
    var allfriends =  [
        {
            id: 1,
            name: 'OBB',
            location: 'Chennai',

            since: 4
        },
        {
            id: 2,
            name: 'BNP',
            location: 'Ahmedabad',

            since: 6

        },
        {
            id: 3,
            name: 'CAS',
            location: 'Bengaluru',

            since: 2

        },
        {
            id: 4,
            name: 'OWIOH',
            location: 'Japan',

            since: 9
        }
    ]


    switch (action.type) {
        case "NEW_FRIEND":
            console.log('add name, location for new friend....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newallfriends = [{ 
                                        id:length+1, 
                                        name: action.payload.name,
                                        location: action.payload.location,
                                        since: action.payload.since
                                    }, ...state]
            return newallfriends
        case "FRIEND_NAME_CLICKED":
            console.log("Value of state when friendname is clicked... in all friends.....!")
            console.log(state);
            return state

        case "PLUS_BUTTON_CLICKED":
            console.log("Value of state when + is clicked... in allfriends.....!")
            console.log(state);
            return state  
        
        case "MINUS_BUTTON_CLICKED":
            console.log("Value of state when - is clicked... in allfriends.....!")
            console.log(state);
            return state   

        default:
            break;
    }

    return allfriends
}

export default myallfriendsreducer