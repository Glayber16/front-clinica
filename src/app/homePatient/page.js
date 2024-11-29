"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button"
import { CalendarDays, FileText, User, ClipboardList } from 'lucide-react'
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserService from "../../../services/UserServices";
import LogoutButton from "@/components/ui/logout";
import MedicalRecordModal from "@/components/ui/medicalrecord";

export default function PatientHomepage() {

  const [formData, setFormData] = useState({
      Email: "",
      SenhaHash:"",
      TipoUsuario:"",
      nome: "", 
      cpf: "", 
      dataNascimento: ""
  })
 
  const formatDate = (isoDate) => {
    if (!isoDate) return "Data inválida"; 
    const date = new Date(isoDate);
    if (isNaN(date)) return "Data inválida";
    return new Intl.DateTimeFormat("pt-BR").format(date); 
  };
  
  

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setFormData({
        id: userData.id || "",
        nome: userData.nome || "",
        cpf: userData.cpf || "",
        dataNascimento: userData.dataNascimento || "",
        Email: userData.Email || "",
        SenhaHash: userData.SenhaHash || "",
        TipoUsuario: userData.TipoUsuario || "",
      });
    }
  }, []);
  
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
        ...formData,
        [id]: value,
    });
};

const handleSubmit = async (e) => {
  e.preventDefault();

 

  const userService = new UserService();
  try {
    const formattedDate = new Date(formData.dataNascimento).toISOString();
    const updatedData = {
      nome: formData.nome,
      cpf: formData.cpf,
      Email: formData.Email,
      SenhaHash: formData.SenhaHash,
      TipoUsuario: formData.TipoUsuario,
      dataNascimento: formattedDate
    };

    console.log("Dados enviados:", updatedData);

    const response = await userService.AtualizarPaciente(formData.id, updatedData);
    const newformData = { ...formData, ...updatedData };
    setFormData(newformData);
    localStorage.setItem("userData", JSON.stringify(newformData));
    console.log("Dados enviados:", {
      nome: formData.nome,
      cpf: formData.cpf,
      Email: formData.Email,
      SenhaHash: formData.SenhaHash,
      TipoUsuario: formData.TipoUsuario,
      dataNascimento: formattedDate,
    });
    alert("Dados atualizados com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    if (error.response && error.response.data) {
      console.error("Detalhes do erro:", error.response.data);
    }
    
  }
};

  return (
    <div className=" bg-[#EAF4FB]"> 
   
      <Navbar/>
      <LogoutButton/>
      <div className="container mx-auto max-w-4xl min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6 text-[#4A90E2]">Bem-vindo(a), {formData.nome}</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-[#4A90E2] text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 text-[#4A90E2]">
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold ">{formData.nome}</h2>
                  <p className="text-sm ">Paciente</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="font-medium ">Data de Nascimento:</span>
                  <span className="">{formatDate(formData.dataNascimento)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="font-medium ">CPF:</span>
                  <span className="">{formData.cpf}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
          
            <Card className="bg-white shadow-lg ">
              <CardHeader className="bg-[#006647] text-white rounded-t-lg">
                <CardTitle className="flex flex-col items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Atualizar Dados de cadastro
                  <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4 bg-[white] hover:bg-[#4A90E2] text-black">
                    Atualizar Informações
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Atualizar Informações Pessoais</DialogTitle>
                    <DialogDescription>
                      Faça as alterações necessárias nos seus dados pessoais. Clique em salvar quando terminar.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nome" className="text-right">
                          Nome
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome || ""}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dataNascimento" className="text-right">
                          Data de Nascimento
                        </Label>
                        <Input
                          id="dataNascimento"
                          name="dataNascimento"
                          value={formData.dataNascimento || ""}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cpf" className="text-right">
                          CPF
                        </Label>
                        <Input
                          id="cpf"
                          name="cpf"
                          value={formData.cpf || ""}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Salvar alterações</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
                </CardTitle>
              </CardHeader>
              
            </Card>

            <div className=" gap-4">
              <Card className="bg-white shadow-lg">
                <CardHeader className="bg-[#006647] text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <FileText className="h-5 w-5" />
                    Prontuário
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <MedicalRecordModal  patient={formData}/>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}