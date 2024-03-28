"use client"

import { useEffect, useState } from "react"

interface ImageUploadProps {
    disable?: boolean
    onChange:(value:string) => void
    onRemove:(value:string) => void
    value:string[]
}


const ImagUpload:React.FC<ImageUploadProps> = ({
    disable,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])
  

    const onUpload = (result:any) =>{
        onChange(result.info.secure_url)
    }

    if(!isMounted){
        return null
    }

  return (
    <div>
     <div className="mb-4 flex items-center gap-4">

     </div>
    </div>
  )
}

export default ImagUpload