import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays, FileText, User, ClipboardList } from 'lucide-react'

export default function PatientHomepage() {
  // This would typically come from an API or auth context
  const patientData = {
    name: "Maria Silva",
    dob: "15/03/1985",
    cpf: "123.456.789-00",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Bem-vindo(a), {patientData.name}</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-20 w-20 border-2 border-blue-200">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt={patientData.name} />
                  <AvatarFallback className="bg-green-100 text-green-800">{patientData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold text-blue-800">{patientData.name}</h2>
                  <p className="text-sm text-blue-600">Paciente</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="font-medium text-blue-700">Data de Nascimento:</span>
                  <span className="text-blue-600">{patientData.dob}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="font-medium text-blue-700">CPF:</span>
                  <span className="text-blue-600">{patientData.cpf}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Próxima Consulta
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-2xl font-semibold text-green-700">22/06/2023</p>
                <p className="text-sm text-green-600">Check-up Geral</p>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                  Reagendar
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-white shadow-lg">
                <CardHeader className="bg-blue-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <FileText className="h-5 w-5" />
                    Prontuário
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Ver Prontuário
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader className="bg-green-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <ClipboardList className="h-5 w-5" />
                    Exames
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Ver Exames
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}