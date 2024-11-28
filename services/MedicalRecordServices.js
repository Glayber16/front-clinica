import http from "@/http-common";

export default class MedicalRecordServices{
    async Criar(data){
        try{
            const response = await http.post("/medicalrecord", data);
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
            const response = await http.put("/medicalrecord/${id}", data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao atualizar prontuario", error);
            throw error;
        }
    }
}