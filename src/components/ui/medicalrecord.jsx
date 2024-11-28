"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, User, FileText, Save } from 'lucide-react'

export default function MedicalRecordModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [patientData, setPatientData] = useState({
    name: "Maria Silva",
    dob: "15/03/1985",
    id: "123456",
    description: "Paciente com histórico de hipertensão. Última consulta realizada em 10/05/2023 para check-up de rotina. Exames de sangue indicaram níveis normais de colesterol e glicose. Recomendada continuação do tratamento atual e retorno em 6 meses para nova avaliação."
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
        ...formData,
        [id]: value,
    });
};

  const handleSave = () => {
    setIsEditing(false)
  
    console.log("Saved data:", patientData)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Abrir Prontuário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col">
        <DialogHeader className="bg-blue-600 text-white rounded-t-lg p-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Prontuário Médico
            </DialogTitle>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-blue-700"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancelar" : "Editar"}
            </Button>
          </div>
          <DialogDescription className="text-blue-100">
            ID do Paciente: {patientData.id}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-auto p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="space-y-1">
              {isEditing ? (
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={patientData.name}
                    onChange={handleInputChange}
                    className="max-w-[300px]"
                  />
                </div>
              ) : (
                <h2 className="text-2xl font-bold text-blue-800">{patientData.name}</h2>
              )}
              {isEditing ? (
                <div className="space-y-2">
                  <Label htmlFor="dob">Data de Nascimento</Label>
                  <Input
                    id="dob"
                    name="dob"
                    value={patientData.dob}
                    onChange={handleInputChange}
                    className="max-w-[300px]"
                  />
                </div>
              ) : (
                <p className="text-blue-600 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {patientData.dob}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-lg font-semibold text-blue-800">
              Descrição / Histórico
            </Label>
            {isEditing ? (
              <Textarea
                id="description"
                name="description"
                value={patientData.description}
                onChange={handleInputChange}
                className="min-h-[200px]"
              />
            ) : (
              <ScrollArea className="h-[200px] w-full rounded-md border border-blue-200 p-4">
                <p className="text-blue-700">{patientData.description}</p>
              </ScrollArea>
            )}
          </div>
        </div>
        {isEditing && (
          <div className="p-6 bg-gray-50 rounded-b-lg">
            <Button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700">
              <Save className="mr-2 h-4 w-4" /> Salvar Alterações
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}