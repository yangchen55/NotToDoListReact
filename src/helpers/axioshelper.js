import axios from 'axios'
const rootUrl = "http://localhost:8000/api/v1/task"
export const fetchTasks = () => {
    

    try{
       return axios.get(rootUrl);     
    }catch(error){
        console.log(error);
        return{
            status: "error",
            message: error.message
        }
    }
};

export const addTasks = (taskObj) => {
    try{
       return axios.post(rootUrl, taskObj);
        
    }catch(error){
        console.log(error);
        return{
            status: "error",
            message: error.message
        }
    }
};

export const deleteTasks = (_idsArg) => {
    try{
       return axios.delete(rootUrl, {data:_idsArg})
    }catch (error){
        return{
        status:'error',
        message: "error.message"
        };
    }
}

export const updateTask = (obj)  => {
    try {
        return axios.put(rootUrl, obj)
        
    } catch (error) {
        console.log(error);
        return{
            status:"error",
            message: error.message
        };
        
    }

}