"use client"

import Button from "@/components/ui/button"
import IconButton from "@/components/ui/icon-button"
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import Filter from "./filter"

interface MobileFilterProps{
    sizes: Size[]
    colors: Color[]
}
const MobileFilter:React.FC<MobileFilterProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
  return (
    <div>
        <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
            Filters
        <Plus size={20}/>
        </Button>
        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
            {/* background */}
            <div className="fixed inset-0 bg-black bg-opacity-25"/>
            {/* dialog */}
            <div className="fixed inset-0 z-40 flex">
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15}/>} onClick={onClose}/>
               </div>
                <div className="p-4">
                <Filter 
                    valueKey="sizeId"
                    name="Sizes"
                    data={sizes}
                    /> 
                 <Filter 
                    valueKey="colorId"
                    name="Colors"
                    data={colors}
                    /> 
                </div>
              </Dialog.Panel>
            </div>
         </Dialog>
        </div>
  )
}

export default MobileFilter