import httpReq from "./http.service";

class DoubtService {
    async postDoubt(body){
        const {data} = await httpReq.post("/alldoubt", body);
        return data;
    }
    async getAllDoubt(){
        const {data} = await httpReq.get("/alldoubt");
        return data;
    }
    async postComment(body){
        const {data} = await httpReq.post("/studentcomment", body);
        return data;
    }
    async getComment(id){
        const {data} = await httpReq.get(`/comment?id=${id}`)
        return data;
    }
    async getSpecificDoubt(email){
        const {data} = await httpReq.get(`/yourdoubt?email=${email}`);
        return data;
    }
    async postTeacherAns(id, body){
        const {data} = await httpReq.update(`/unresolved?id=${id}`, body);
        return data;
    }
    async getResolvedData(email){
        const {data} = await httpReq.get(`/resolved?email=${email}`)
        return data;
    }
}

export default new DoubtService();