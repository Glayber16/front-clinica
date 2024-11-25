import http from "@/http-common";

export default class LoginService{
    async Login(data){
        try{
            const response = await http.post('/User/login', data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao entrar na conta", error);
            throw error;
        }
        
    }
}