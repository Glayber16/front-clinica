"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2 } from 'lucide-react'
import MedicalRecordServices from '../../../services/MedicalRecordServices'

export default function DeleteMedicalRecordButton({ onDelete }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [recordId, setRecordId] = useState('')

    const handleInputChange = (e) => {
        const { value } = e.target;
        setRecordId(value); 
    };

    const handleDelete = async () => {

        setIsDeleting(true); 
        const medicalRecordServices = new MedicalRecordServices();

        try {
            
            await medicalRecordServices.Deletar(recordId);
            console.log(`Prontuário ${recordId} excluído`);

            if (onDelete) {
                onDelete(recordId); 
            }
            alert("Prontuario excluido com sucesso");
            setIsOpen(false); 
        } catch (error) {
            console.error('Erro ao excluir o prontuário:', error);
            alert('Ocorreu um erro ao excluir o prontuário. Tente novamente mais tarde.');
        } finally {
            setIsDeleting(false); 
        }
    };

    return (
        <>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" className="bg-red-500 hover:bg-red-600 text-white">
                <Trash2 className="mr-2 h-4 w-4" /> Excluir Prontuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Excluir Prontuário</DialogTitle>
                <DialogDescription>
                  Por favor, insira o ID do prontuário que deseja excluir.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Label htmlFor="recordId" className="text-right">
                  ID do Prontuário
                </Label>
                <Input
                  id="recordId"
                  value={recordId}
                  onChange={handleInputChange}
                  placeholder="Digite o ID do prontuário"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  onClick={handleDelete} 
                  className="bg-red-500 hover:bg-red-600 text-white"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Excluindo..." : "Confirmar"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
    );
}
