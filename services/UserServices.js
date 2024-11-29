import http from "@/http-common";

export default class UserService{
    async Register(data){
        try{
            const rota = data.TipoUsuario;
            const response = await http.post(rota, data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao cadastrar", error);
            throw error;
        }
    }

    async Login(data){
        try{
            const response = await http.post('/User/login', data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao entrar na conta", error);
            throw error;
        }
        
    }

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

    async Atualizar(id, data){
        try{
            const response = await http.put('/User/' + id , data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao atualizar dados da conta", error);
            throw error;
        }
        
    }

    async AtualizarPaciente(id, data){
        try{
            const response = await http.put('/patient/' + id, data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao listar", error);
            throw error;
        }
        
    }

    async AtualizarMedicos(id, data){
        try{
            const response = await http.put('/doctor/' + id, data);
            console.log("Resposta recebida do backend:", response.data);
            return response.data;
        }
        catch(error){
            console.log("Erro ao listar", error);
            throw error;
        }
        
    }

}