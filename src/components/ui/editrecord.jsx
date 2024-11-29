"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pencil, Save, FileText, CalendarIcon } from 'lucide-react'

export default function EditMedicalRecordButton({ patientId }) {
  const [isOpen, setIsOpen] = useState(false)
  const [patientData, setPatientData] = useState({
    id: patientId,
    name: "",
    dob: "",
    description: ""
  })

  const handleOpen = async () => {
    const fetchedData = {
      id: patientId,
      name: "Maria Silva",
      dob: "1985-03-15",
      description: "Paciente com histórico de hipertensão. Última consulta realizada em 10/05/2023 para check-up de rotina."
    }
    setPatientData(fetchedData)
    setIsOpen(true)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setPatientData(prevData => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSave = () => {

    console.log("Saved data:", patientData)
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen} className="bg-yellow-500 hover:bg-yellow-600 text-white">
        <Pencil className="mr-2 h-4 w-4" /> Editar Prontuário
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col">
          <DialogHeader className="bg-yellow-500 text-white rounded-t-lg p-6">
            <DialogTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Editar Prontuário Médico
            </DialogTitle>
            <DialogDescription className="text-yellow-100">
              ID do Paciente: {patientData.id}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-auto p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={patientData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Data de Nascimento</Label>
                <Input
                  id="dob"
                  type="date"
                  value={patientData.dob}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição / Histórico</Label>
                <Textarea
                  id="description"
                  value={patientData.description}
                  onChange={handleInputChange}
                  className="min-h-[200px]"
                />
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-b-lg">
            <Button onClick={handleSave} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
              <Save className="mr-2 h-4 w-4" /> Salvar Alterações
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}