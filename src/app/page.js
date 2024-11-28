import React from 'react'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Users, Calendar, Phone } from 'lucide-react'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col bg-[#EAF4FB]'>
      <Navbar />
      <main className='flex-grow'>
        <section className='container mx-auto px-4 py-12 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#4A90E2] mb-4'>Bem-vindo à Clínica Saúde</h1>
          <p className='text-xl text-[#333333] mb-8 max-w-2xl mx-auto'>
            Sua saúde é nossa prioridade. Experimente atendimento compassivo com tecnologia de ponta.
          </p>
        </section>

        <section className='container mx-auto px-4 py-12'>
          <h2 className='text-3xl font-bold text-[#4A90E2] text-center mb-8'>Nossos Serviços</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <Stethoscope className="h-8 w-8 text-[#7ED321]" />
                <CardTitle>Check-up Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Avaliações abrangentes de saúde para mantê-lo em ótimas condições.</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <Users className="h-8 w-8 text-[#4A90E2]" />
                <CardTitle>Medicina Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Cuidados personalizados para todos os membros da família, de bebês a idosos.</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-3">
                <Calendar className="h-8 w-8 text-[#F5A623]" />
                <CardTitle>Consultas Especializadas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Acesso a uma ampla gama de especialistas médicos para cuidados específicos.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='bg-white py-12'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-[#4A90E2] text-center mb-8'>Por que Escolher a Clínica Saúde?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='text-center'>
                <Users className="h-12 w-12 text-[#4A90E2] mx-auto mb-4" />
                <h3 className='text-xl font-semibold mb-2'>Equipe Experiente</h3>
                <p>Profissionais altamente qualificados e dedicados ao seu bem-estar.</p>
              </div>
              <div className='text-center'>
                <Stethoscope className="h-12 w-12 text-[#7ED321] mx-auto mb-4" />
                <h3 className='text-xl font-semibold mb-2'>Tecnologia Avançada</h3>
                <p>Equipamentos modernos para diagnósticos precisos e tratamentos eficazes.</p>
              </div>
              <div className='text-center'>
                <Calendar className="h-12 w-12 text-[#F5A623] mx-auto mb-4" />
                <h3 className='text-xl font-semibold mb-2'>Atendimento Rápido</h3>
                <p>Agendamento fácil e tempos de espera reduzidos para sua conveniência.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='container mx-auto px-4 py-12 text-center'>
          <h2 className='text-3xl font-bold text-[#4A90E2] mb-4'>Pronto para Cuidar da Sua Saúde?</h2>
          <p className='text-xl text-[#333333] mb-8 max-w-2xl mx-auto'>
            Entre em contato conosco hoje e dê o primeiro passo para uma vida mais saudável.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}