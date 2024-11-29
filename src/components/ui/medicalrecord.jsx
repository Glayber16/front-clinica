"use client"

import { useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import MedicalRecordServices from '../../../services/MedicalRecordServices'
import { CalendarIcon, User, FileText, MoveRight, MoveLeft } from 'lucide-react'

export default function MedicalRecordModal({patient}) {
  const [isOpen, setIsOpen] = useState(false);
  const [contador, setContador] = useState(0);
  const [prontuario, setProntuario] = useState({
    id: "",
    desc: ""
  })
  const handleLeftClick = () => {
    if (contador > 0) {
      setContador(contador - 1); 
    }
  }
  const handleRightClick = () => {
    setContador(contador + 1); 
  
  };
  

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open && patient && patient.id) {
      BuscarProntuario(patient.id); 
    }
  };

  useEffect(() => {
    if (isOpen && patient && patient.id) {
      BuscarProntuario(patient.id); 
    }
  }, [contador, isOpen, patient]);
  
  

  const BuscarProntuario = async (id) => {
    const medicalRecordServices = new MedicalRecordServices();
    try {
      const response = await medicalRecordServices.Buscar(id); 
      const prontuarioData = response.data[contador];     
      
        setProntuario({
          id: prontuarioData.id,  
          desc: prontuarioData.descricao || "Descrição não disponível", 
        });
    } 
    catch (error) {
      console.error("Erro ao buscar prontuário:", error);
      if (error.response && error.response.data) {
        console.error("Detalhes do erro:", error.response.data);
      }
    }
  };


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      
      <DialogTrigger asChild>
        <Button onClick={() => handleOpenChange(true)} variant="outline">Abrir Prontuário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col">
        <DialogHeader className="bg-blue-600 text-white rounded-t-lg p-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Prontuário Médico
            </DialogTitle>
           
          </div>
          <DialogDescription className="text-blue-100">
            ID do Paciente: {patient.id}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-auto p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="space-y-1">
             
                <h2 className="text-2xl font-bold text-blue-800">{patient.nome}</h2>
              
             
                <p className="text-blue-600 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {patient.dataNascimento}
                </p>
            
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-lg font-semibold text-blue-800">
              Descrição / Histórico
            </Label>
          
              <ScrollArea className="h-[200px] w-full rounded-md border border-blue-200 p-4">
                <p className="text-blue-700">{prontuario.desc}</p>
              </ScrollArea>
              <div className='flex justify-center items-center gap-5'>
                <button onClick={handleLeftClick}><MoveLeft className="h-4 w-4 mr-1" /></button>
                <button onClick={handleRightClick}><MoveRight className="h-4 w-4 mr-1'"/></button>
              </div>
            
          </div>
        </div>  
      </DialogContent>
    </Dialog>
  )
}