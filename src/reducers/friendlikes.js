const myallfriendslikes =  function friendLikesReducer(state = null, action){
    console.log(state); 
    
        var likes = [
            {
                id: 1,
                likes: 4,
                
            },
            {
                id: 2,
                likes: 8,
              
         
            },
            {
                id: 3,
                likes: 12,
               
     
            },
            {
                id: 4,
                likes: 13,
               
            }
        ]
   
   

    console.log("Broadcast action for plusbuttonclicked received....");
    console.log(action);
    switch (action.type) {
        
        case "PLUS_BUTTON_CLICKED":
              console.log("Increment the likes by 1 ....")  
              console.log(state);
              var updatedlikes = state.map(obj =>{
                    if(obj.id === action.payload.id){
                        console.log("The matching one is found....");
                        console.log(obj)
                        obj.likes++
                        console.log("The matching one is inceremented....");
                        console.log(obj)
                        return obj
                    }
                    return obj
                })
                console.log(likes)
                console.log(state)
                console.log(updatedlikes) 
                return updatedlikes 
                
        case "MINUS_BUTTON_CLICKED":
            console.log("Decrement the likes by 1 ....")  
            var updatedlikes = state.map(obj =>{
                    if(obj.id === action.payload.id){
                        console.log("The matching one is found....");
                        console.log(obj)
                        obj.likes--
                        console.log("The matching one is decremented....");
                        console.log(obj)
                        return obj
                    }
                    return obj
                })
                console.log(likes)
                console.log(state)
                console.log(updatedlikes) 
                return updatedlikes 
                            
        case "NEW_FRIEND":
            console.log('add likes for new friend....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newLikes = [{ id:length+1, likes: action.payload.likes   }    , ...state]
            return newLikes

        case "FRIEND_NAME_CLICKED":
            console.log("Value of state when friendname is clicked... in friendlikes.....!")
            console.log(state);
            return state  
        case "ALL_BLOGS":
            return state        
        
    
        default:
            break;
    }


    return likes
}


export default myallfriendslikes