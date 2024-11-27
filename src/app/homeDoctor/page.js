"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


import { Search, FileText, Calendar } from 'lucide-react'


const patients = [
  { id: 1, name: "Maria Silva", dob: "15/03/1985" },
  { id: 2, name: "João Santos", dob: "22/07/1990" },
  { id: 3, name: "Ana Oliveira", dob: "30/11/1978"  },
  { id: 4, name: "Carlos Ferreira", dob: "08/09/1982"  },
  { id: 5, name: "Beatriz Lima", dob: "14/02/1995"  },
]

export default function DoctorHomepage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Painel do Médico</h1>
          <p className="text-blue-600">Bem-vindo(a), Dr. Silva</p>
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
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
                <Input
                  type="text"
                  placeholder="Buscar paciente..."
                  className="pl-8 bg-blue-600 text-white placeholder-blue-300 border-blue-500 focus:border-blue-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Data de Nascimento</TableHead>
                  <TableHead>Última Consulta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <span>{patient.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{patient.dob}</TableCell>


                    <TableCell>
                      <Button variant="outline" size="sm">Ver Prontuário</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}