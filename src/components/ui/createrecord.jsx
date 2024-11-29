"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText, Save, Plus } from 'lucide-react'
import MedicalRecordServices from '../../../services/MedicalRecordServices'

export default function CreateMedicalRecordButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    PacienteId: "",
    desc: "",
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const medicalRecordServices = new MedicalRecordServices();
    try{
        const response = await medicalRecordServices.Criar(formData);
        console.log("Novo prontuário criado:", response)

    }
    catch (error) {
        console.error('Erro ao criar prontuário:', error);
        if (error.response && error.response.data) {
          console.error('Detalhes do erro:', error.response.data);
        }
    }
    
    setIsOpen(false)
    setFormData({PacienteId: "", desc: "" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Criar Novo Prontuário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col">
        <DialogHeader className="bg-green-600 text-white rounded-t-lg p-6">
          <DialogTitle className="text-2xl flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Criar Novo Prontuário
          </DialogTitle>
          <DialogDescription className="text-green-100">
            Preencha as informações do paciente para criar um novo prontuário
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-auto p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="PacienteId">ID do Paciente</Label>
              <Input
                id="PacienteId"
                name="PacienteId"
                value={formData.PacienteId}
                onChange={handleInputChange}
                placeholder="Digite o ID do paciente"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Descricao">Descrição / Histórico Médico</Label>
              <Textarea
                id="Descricao"
                name="Descricao"
                value={formData.Descricao}
                onChange={handleInputChange}
                placeholder="Digite a descrição ou histórico médico do paciente"
                className="min-h-[200px]"
              />
            </div>
          </div>
        </div>
        <DialogFooter className="bg-gray-50 rounded-b-lg p-4">
          <Button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700 text-white">
            <Save className="mr-2 h-4 w-4" /> Criar Prontuário
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}