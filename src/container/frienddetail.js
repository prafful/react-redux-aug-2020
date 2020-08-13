import React from 'react';

class FriendDetail extends React.Component {
    
    render() { 
        return ( 
            <div>
                Click friend above to see detail:
                <br></br>
                <ol>
                    <li>Full Name: </li>
                    <li>Location: </li>
                    <li>Friend Since: </li>
                    <li>Likes:</li>
                    <li>Other Friends: </li>
                </ol>
            </div>
         );
    }
}
 
export default FriendDetail;