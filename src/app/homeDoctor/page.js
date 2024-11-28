"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MedicalRecord from "@/components/ui/medicalrecord";

import { Search, FileText } from "lucide-react";
import ListarServices from "../../../services/ListarServices";
import MedicalRecordModal from "@/components/ui/medicalrecord";
import LogoutButton from "@/components/ui/logout";

export default function DoctorHomepage() {
  const [patients, setPatients] = useState([]);
  const [doctorData, setDoctorData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPatient(null);
    setIsModalOpen(false);
  };
  
  const ListPatients = async () => {
    const listarServices = new ListarServices();
    try {
      const response = await listarServices.Listar();
      setPatients(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    ListPatients();
  }, []);

 
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setDoctorData(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <LogoutButton/>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Painel do Médico</h1>
          <p className="text-blue-600">Bem-vindo(a), {doctorData.nome}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Total de Pacientes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold text-blue-800">{patients.length}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Lista de Pacientes
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Data de Nascimento</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                
                {patients.map((patient) => (
                  
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.nome}</TableCell>
                    <TableCell>{patient.dataNascimento}</TableCell>
                    <TableCell>
                      <MedicalRecordModal/>                     
                    </TableCell>
                  </TableRow>
                  
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
