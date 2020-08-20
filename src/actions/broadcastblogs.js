

const actionBroadcastBlogs = function(blogs){
    console.log("Received all blogs in action broadcaster....");
    console.log(blogs);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'ALL_BLOGS',
        payload:blogs
    })

}

export default actionBroadcastBlogs