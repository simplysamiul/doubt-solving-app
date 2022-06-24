const { default: axios } = require("axios");

const axiosCOnfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout : 2000
};

const instance = axios.create(axiosCOnfig);

// Make api request handel pattern
class Request {
    async get(url){
        return await instance.get(url);
    }
    async post(url, body){
        return await instance.post(url, body);
    }
    async update(url, body){
        return await instance.put(url, body);
    }
    async delete(url){
        return await instance.delete(url);
    }
}
const httpReq = new Request();
export default httpReq;