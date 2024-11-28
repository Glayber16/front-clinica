import http from "@/http-common";

export default class ListarServices{
    async Listar(){
        try{
            const response = await http.get('/patient');
            console.log("Resposta recebida do backend:", response);
            return response;
        }
        catch(error){
            console.log("Erro ao listar", error);
            throw error;
        }
        
    }
}