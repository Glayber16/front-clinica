"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando o hook para navegação
import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter(); 

  const handleLogout = async () => {
    setIsLoggingOut(true);

   
    

    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');

   
    console.log("Usuário desconectado");

    router.push('/login'); 
    setIsLoggingOut(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-white text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-all duration-300"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja sair?</AlertDialogTitle>
          <AlertDialogDescription>
            Você será desconectado da sua conta. Certifique-se de ter salvo todas as informações importantes.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white"
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Saindo..." : "Sair"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
