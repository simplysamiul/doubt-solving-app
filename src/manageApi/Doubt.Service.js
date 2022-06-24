import httpReq from "./http.service";

class DoubtService {
    async postDoubt(body){
        const {data} = await httpReq.post("/alldoubt", body);
        return data;
    }
}

export default new DoubtService();