import React from 'react';

class FriendLikes extends React.Component {
    
    render() { 
        return ( 
            <div>
                I will change number of likes for given friend:
                <br></br>
                <button>+</button>
                &nbsp;
                <button>-</button>
            </div>
         );
    }
}
 
export default FriendLikes;