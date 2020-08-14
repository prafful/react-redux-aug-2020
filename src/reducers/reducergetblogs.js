
import axios from "axios";

const getblogsreducer = function(){
    return axios.get('http://localhost:3000/blogs')
            

     
}


export default getblogsreducer