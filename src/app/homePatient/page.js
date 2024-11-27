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
export default function PatientHomepage() {
  const [patientData, setPatientData] = useState({});

  const [formData, setFormData] = useState({
    name: patientData.name,
    dob: patientData.dob,
    cpf: patientData.cpf,
  })
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setPatientData(JSON.parse(userData));
    }
  }, []);

  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPatientData(formData)
    // Here you would typically send the updated data to your backend
    console.log("Updated data:", formData)
  }

  return (
    <div className=" bg-[#EAF4FB]"> 
      <Navbar></Navbar>
      <div className="container mx-auto max-w-4xl min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6 text-[#4A90E2]">Bem-vindo(a), {patientData.nome}</h1>
        
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
                  <h2 className="text-xl font-semibold ">{patientData.nome}</h2>
                  <p className="text-sm ">Paciente</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="font-medium ">Data de Nascimento:</span>
                  <span className="">{patientData.date}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="font-medium ">CPF:</span>
                  <span className="">{patientData.cpf}</span>
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
                  <Button className="w-full mt-4 bg-[#006647] hover:bg-[#4A90E2] text-white">
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
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dob" className="text-right">
                          Data de Nascimento
                        </Label>
                        <Input
                          id="dob"
                          name="dob"
                          value={formData.dob}
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
                          value={formData.cpf}
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
                  <Button className="w-full bg-[#006647] hover:bg-[#4A90E2] text-white">
                    Ver Prontuário
                  </Button>
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