const getblogsreducer = function getBlogs(state = null, action){

    var allblogs =  []

    switch (action.type) {
        case 'ALL_BLOGS':
            console.log(action.payload)
            return action.payload
        case "FRIEND_NAME_CLICKED":
            return state
        case "NEW_FRIEND":
            return state
        case "PLUS_BUTTON_CLICKED":
            return state
        case "MINUS_BUTTON_CLICKED":    
            return state
            
        default:
            break;
    }

    return allblogs
}


export default getblogsreducer