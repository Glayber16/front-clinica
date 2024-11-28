"use client"
import Link from 'next/link';
import { HeartPulse, Equal } from 'lucide-react';
import { Button } from './button';
import {useState} from 'react';
export default function Navbar() {
    const [Visible, setVisible] = useState(false)
  return (
    <nav className="bg-[#F8F9FA] p-4 text-[#333333] top-0 w-full">
        <ul className="flex justify-between items-center space-x-4">
            <div className='flex  justify-center items-center gap-6'> 
                <HeartPulse className="h-10 w-10 text-[#7ED321]" />
                <h1 className='lg:text-3xl text-[#4A90E2] font-bold'>Clinica de Saúde</h1>
            </div>
            <div className='flex md:hidden'>
                <Button variant = "ghost" onClick={() => setVisible (true)}> <Equal/></Button>
                {Visible && (<div className='lg:w-screen h-screen fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-10'>
                    <div onClick={() => setVisible (!Visible)} className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 '> </div>
                    <div className='absolute bg-white h-[15rem] w-[19rem] justify-center items-center flex rounded-xl '> 
      
                        <div className='flex flex-col text-xl font-semibold md:hidden  text-[#133E6C] gap-x-16'></div>
                        <div className='flex flex-col'> 
                            <li className=''>
                                <Link href="/">
                                    <Button variant="ghost">Home</Button>
                                </Link>
                            </li>                   
                        
                            <li>
                                <Link href="/login">
                                    <Button variant="ghost">Entrar</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/register">
                                    <Button variant="ghost">Cadastrar</Button>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className='md:flex hidden items-center gap-14 gap-y-6'> 
                <li className=''>
                    <Link href="/">
                        <Button variant="ghost">Home</Button>
                    </Link>
                </li>

               
                <li>
                    <Link href="/login">
                        <Button variant="ghost">Entrar</Button>
                    </Link>
                </li>
                <li>
                    <Link href="/register">
                        <Button variant="ghost">Cadastrar</Button>
                    </Link>
                </li>
            </div>
        </ul>
    </nav>
  );
}