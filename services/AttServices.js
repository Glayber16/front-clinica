import http from "@/http-common";

export default class AttService{
    async Atualizar(id, data){
        try{
            const response = await http.put('/User/${id}', data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao entrar na conta", error);
            throw error;
        }
        
    }
}