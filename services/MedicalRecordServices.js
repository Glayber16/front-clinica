import http from "@/http-common";

export default class MedicalRecordServices{
    async Criar(data){
        try{
            const response = await http.post("/MedicalRecord", data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao criar prontuario", error);
            throw error;
        }
    }

    async Atualizar(id, data){
        try{
            const response = await http.put("/MedicalRecord/" + id, data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao atualizar prontuario", error);
            throw error;
        }
    }

    async Listar(){
        try{
            const response = await http.get("/MedicalRecord");
            console.log("Resposta recebida do backend:", response);
            return response;
        }
        catch(error){
            console.log("Erro ao listar", error);
            throw error;
        }
        
    }

    async Deletar(id){
        try{
            const response = await http.delete("/MedicalRecord/" + id);
            console.log("Resposta recebida do backend", response);
            return response;
        }
        catch(error){
            console.log("Erro ao deletar prontuario", error);
            throw error;
        }
    }

    async Buscar(id){
        try{
            const response = await http.get("MedicalRecord/" + id);
            console.log("Resposta recebida do backend:", response);
            return response;
        }
        catch(error){
            console.log("Erro ao buscar", error);
            throw error;
        }
    }
}