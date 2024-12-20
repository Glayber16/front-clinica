"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import UserService from '../../../services/UserServices';
import { Router, useRouter } from 'next/navigation';


function page() {
  const [formData, setFormData] = useState({
    Nome: "",
    CPF: "",
    email: "",
    SenhaHash: "",
    TipoUsuario: "patient", 
    dataNascimento: "",
    CRM:"",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const userService = new UserService();
    
    try {
      const response = await userService.Register(formData); 
      console.log('Usuário cadastrado com sucesso:', response);
      alert("Cadastro concluído com sucesso!");
      router.push("/login");
      
    } 
    catch (error) {
      console.error('Erro ao atualizar usuario:', error);
      if (error.response && error.response.data) {
        console.error('Detalhes do erro:', error.response.data);
      }
      alert("Erro ao cadastrar usuário. Tente novamente!");
    }
  };

  return (
    <div className="bg-[#EAF4FB] bg-cover bg-center">
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className="flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-4">
                <HeartPulse className="h-12 w-12 text-[#7ED321]" />
              </div>
              <CardTitle className="text-2xl font-bold text-center text-[#4A90E2]">Crie sua conta</CardTitle>
              <CardDescription className="text-center text-[#4A90E2]">
                Tenha um melhor controle de seus exames e consultas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-[#333333]">
              <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="Nome">Nome completo</Label>
                  <Input id="Nome" value={formData.Nome}  onChange={handleInputChange}  required  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="CPF">CPF</Label>
                  <Input id="CPF" value={formData.CPF} onChange={handleInputChange}  required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleInputChange}  required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="SenhaHash">Senha</Label>
                  <Input id="SenhaHash" type="password" value={formData.SenhaHash}  onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="TipoUsuario">Tipo de conta</Label>
                  <Select onValueChange={(value) => setFormData({...formData, TipoUsuario: value})} value={formData.TipoUsuario}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="patient">Paciente</SelectItem>
                      <SelectItem value="doctor">Medico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CardFooter className="py-3">
                  <Button className="w-full bg-[#7ED321] hover:bg-[#006647] text-white" type="submit"> Criar Conta </Button>
                </CardFooter>
              </form>
            </CardContent>

            <div className='flex justify-center items-center pb-5'>
              <h1>Já possui uma conta? <Link className='hover:text-[#006647] hover:underline' href="/login">Entre agora</Link> </h1>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
