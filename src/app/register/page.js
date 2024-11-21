"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'


function page() {
    const [accountType, setAccountType] = useState('patient')
  return (
    <div className=" bg-[#EAF4FB] bg-cover bg-center ">
        <Navbar/>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          
        <div className="  flex items-center justify-center p-4">
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
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date">Data de Nascimento</Label>
                        <Input id="date" type="date" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="CPF">CPF</Label>
                        <Input id="CPF" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email"  required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" required />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="account-type">Tipo de conta</Label>
                        <Select onValueChange={setAccountType} defaultValue={accountType}>
                            <SelectTrigger>
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="patient">Paciente</SelectItem>
                                <SelectItem value="doctor">Medico</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-[#7ED321] hover:bg-[#006647] text-white">Criar Conta</Button>
                </CardFooter>
                <div className='flex justify-center items-center pb-5'>
                    <h1>Ja possui uma conta ? <Link className='hover:text-[#006647] hover:underline' href={"/login"}>Entre agora</Link> </h1> 
                </div>
            </Card>
        </div>
        </div>
                
        
        
        <Footer/>
    </div>
  )
}

export default page