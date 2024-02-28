"use client"

import { StoreModal } from "@/components/modals/store-modal"
import { useEffect,useState } from "react"

export const ModalProvider = () =>{
    const [isMounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return(
        <>
        <StoreModal/>
        </>
    )
}