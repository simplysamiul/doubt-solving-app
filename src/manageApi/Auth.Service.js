import httpService from "./http.service";

class AuthService {
    async userRegister(body){
        const {data} = await httpService.post("/user", body);
        return data;
    }
    async getSpecificUser(email){
        const {data} = await httpService.get(`user?email=${email}`);
        return data;
    }
}

export default new AuthService();