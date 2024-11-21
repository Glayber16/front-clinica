import React from 'react'
import Navbar from '@/components/ui/navbar'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope } from 'lucide-react'
import Footer from '@/components/ui/footer'
function page() {
  return (
    <div className='bg-[#EAF4FB] '>
      <Navbar/>
      <div className='flex flex-col min-h-screen justify-between'>
        <div className='flex flex-col justify-start items-center py-10'> 
          <h1 className='text-3xl font-bold text-[#4A90E2]'>Bem-vindo à Clínica Saúde </h1>
          <p className='text-[#333333]'>Sua saúde é nossa prioridade. Experimente atendimento compassivo com tecnologia de ponta.</p>
        </div>
        <div className='flex flex-col'> 
          <h1 className='text-3xl font-bold text-[#4A90E2] flex items-center justify-center'>Nossos Serviços</h1>
          <div className='flex md:flex-row flex-col gap-6 py-10 items-center justify-around '>
          
            <Card className="w-[80vw] md:w-[25vw] hover:shadow-lg hover:-translate-y-2 transition-transform transform" >
              <CardHeader className="flex flex-row justify-center gap-3">
                <Stethoscope className="h-8 w-8 text-[#7ED321] mb-2" />
                <CardTitle>General Check-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive health assessments to keep you in optimal condition.</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-[80vw] md:w-[25vw] hover:shadow-lg hover:-translate-y-2 transition-transform transform" >
              <CardHeader className="flex flex-row justify-center gap-3">
                <Stethoscope className="h-8 w-8 text-[#7ED321] mb-2" />
                <CardTitle>General Check-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive health assessments to keep you in optimal condition.</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-[80vw] md:w-[25vw] hover:shadow-lg hover:-translate-y-2 transition-transform transform" > 
              <CardHeader className="flex flex-row justify-center gap-3">
                <Stethoscope className="h-8 w-8 text-[#7ED321] mb-2" />
                <CardTitle>General Check-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive health assessments to keep you in optimal condition.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        </div>
      <Footer/>
    </div>
  )
}

export default page