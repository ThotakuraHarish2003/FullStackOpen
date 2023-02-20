import axios from 'axios'
const url="http://localhost:3001/persons"

const get = (object) =>{
    const req = axios.get(url)
    return req.then(response=>response.data)
}

const add = (object) =>{
    const req = axios.post(url,object)
    return req.then(response=>response.data);
}

const del = (id) => {
    const req = axios.delete(`${url}/${id}`)
    return req.then(response=>response.data)
}

const update =(id,object) =>{
    const req = axios.put(`${url}/${id}`,object)
    return req.then(response => response.data)
}

export default {get,add,del,update}