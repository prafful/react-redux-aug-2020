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
                
              
                               
            
    
        default:
            break;
    }


    return likes
}


export default myallfriendslikes