import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HeartPulse } from 'lucide-react'
import Link from "next/link";
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import React from 'react'

function page() {
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
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full  bg-[#7ED321] hover:bg-[#006647] ">
                            Login
                        </Button>
                    </div>
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