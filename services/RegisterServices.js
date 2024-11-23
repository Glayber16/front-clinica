import http from "@/http-common";

export default class RegisterService{
    async Register(data){
        try{
            const response = await http.post('/User', data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao cadastrar", error);
            throw error;
        }
        
    }
}