"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HeartPulse } from 'lucide-react'
import Link from "next/link";
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import {Router, useRouter} from "next/navigation"
import LoginService from "../../../services/LoginServices"
import React, { useState } from 'react';

function page() {
    const [formData, setFormData] = useState({
        email: "",
        SenhaHash: "",
    });
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
      };
      
      
    const handleLogin = async (e) => {
        e.preventDefault(); 
        const loginService = new LoginService();
        
        try {
            console.log('Enviando dados para o backend:', formData);
            const response = await loginService.Login(formData); 
            console.log('Usuario logado com sucesso:', response);
            router.push("/home");
          
        } 
        catch (error) {
            console.error('Erro completo:', error);
            if (error.response) {
                alert(`Erro ao tentar logar: ${error.response.data || error.response.statusText}`);
            } else {
                alert(`Erro ao tentar logar: ${error.message}`);
            }
        }
      };
    const router = useRouter();
  return (
    <div className=" bg-[#EAF4FB] bg-cover ">
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen ">
            
            <h1 className="text-3xl">Preencha seus dados para fazer Login</h1>
            <div className="flex flex-col gap-2  py-10 px-10 rounded-lg "> 
                <Card className="mx-auto max-w-sm pb-3">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold flex justify-between text-[#4A90E2]">
                            Login
                            <HeartPulse className="h-12 w-12 text-[#7ED321]" />
                        </CardTitle>      
                        <CardDescription className="text-[#4A90E2]"> 
                                Digite seu e-mail e senha para acessar sua conta
                        </CardDescription>
                        
                    </CardHeader>
                    <CardContent>
                    
                    <form onSubmit={handleLogin} className="space-y-4">
                        
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" value={formData.email} onChange={handleInputChange} required />

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="SenhaHash">Senha</Label>
                            <Input id="SenhaHash" type="password" value={formData.SenhaHash} onChange={handleInputChange} required />

                        </div>
                        <Button type="submit" className="w-full  bg-[#7ED321] hover:bg-[#006647] ">
                            Login
                        </Button>
                    </form>
                    </CardContent>
                    <div className="flex justify-center items-center"> 
                        <h1>Ainda não possui uma conta ? <Link href={"/register"} className="hover:text-[#006647] hover:underline">Criar conta</Link> </h1>
                    </div>
                </Card>
            
       
            </div>
            
        </div>
    
     
    
        <Footer/>
  </div>
  )
}

export default page