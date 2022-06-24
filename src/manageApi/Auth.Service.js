import httpReq from "./http.service";

class AuthService {
    async userRegister(body){
        console.log(body);
        const {data} = await httpReq.post("/user", body);
        return data;
    }
    async getSpecificUser(email){
        const {data} = await httpReq.get(`user?email=${email}`);
        return data;
    }
}

export default new AuthService();