"use client"

import Heading from "@/components/ui/heading"
import { OrderColumn, columns } from "./columns"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"


interface OrderClientProps{
    data:OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) =>{
 
    return(
        <>
          <Heading 
            title={`Orders (${data.length})`}
            description="Manager orders for your store"/>
        <Separator/>
        <DataTable searchKey="products" columns={columns} data={data}/>
        
        </>
    )
}