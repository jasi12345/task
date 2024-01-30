"use client";
import React from 'react'
import GlobalStyledProvider from './GlobalStyledProvider';
import { GlobalProvider } from '../contex/globalProvider';
import toast, { Toaster } from 'react-hot-toast';

interface Props{
    children: React.ReactNode;
}

function ContextProvider({children}: Props) {
    const [isReady,setIsReady] = React.useState(false);

    React.useEffect(() =>{
        setTimeout(() =>{
            setIsReady(true);
        },300);

    },[])
    ;if(!isReady){
        return null;
    }

  return <GlobalProvider> <Toaster/>
    {children} </GlobalProvider>
  
}

export default ContextProvider;