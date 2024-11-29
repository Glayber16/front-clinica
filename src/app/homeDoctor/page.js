"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, FileText } from "lucide-react";
import UserService from "../../../services/UserServices";
import MedicalRecordModal from "@/components/ui/medicalrecord";
import LogoutButton from "@/components/ui/logout";
import CreateMedicalRecordButton from "@/components/ui/createrecord";
import Navbar from "@/components/ui/navbar";
import DeleteMedicalRecordButton from "@/components/ui/deleterecord";


export default function DoctorHomepage() {
  const [patients, setPatients] = useState([]);
  const [doctorData, setDoctorData] = useState({});
  const [selectedPatient, setSelectedPatient] = useState([]);  

  const formatDate = (isoDate) => {
    if (!isoDate) return "Data inválida"; 
    const date = new Date(isoDate);
    if (isNaN(date)) return "Data inválida";
    return new Intl.DateTimeFormat("pt-BR").format(date); 
  };
 

  const ListPatients = async () => {
    const userServices = new UserService();
    try {
      const response = await userServices.Listar();
      setPatients(response.data);
    } 
    catch (error) {
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
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4">
        

        
      
        <div className="container mx-auto max-w-6xl">
          <LogoutButton />
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">Painel do Médico</h1>
            <p className="text-blue-600">Bem-vindo(a), {doctorData.nome}</p>
          </header>

          <div className="flex flex-col sm:flex-row">
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
            
            

            <div className="gap-6 md:grid-cols-3 mb-6">
              <Card className="bg-white shadow-lg">
                <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Criar novo prontuário
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CreateMedicalRecordButton />
                </CardContent>
              </Card>
            </div>
            
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
                    <TableHead>Id</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Data de Nascimento</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell className="font-medium">{patient.id}</TableCell>
                      <TableCell className="font-medium">{patient.nome}</TableCell>
                      <TableCell>{formatDate(patient.dataNascimento)}</TableCell>
                      <TableCell onClick={() => setSelectedPatient(patient)}>
                        
                        <MedicalRecordModal  patient={selectedPatient} />
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className= "grid gap-6 md:grid-cols-3 mt-6">
              <Card className="bg-white shadow-lg">
                <CardHeader className="bg-red-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Excluir prontuario
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                <DeleteMedicalRecordButton/>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </div>
  );
}

