import {format} from "date-fns"
import prismadb from "@/lib/prismadb"

import { ColorsColumn } from "./components/columns"
import { ColorsClient } from "./components/client"


const ColorPage = async ({
    params
}:{params:{storeId: string}
}) =>{
    const colors = await prismadb.color.findMany({
        where: {
            storeId:params.storeId
        },
        orderBy:{
            createdAt:'desc'
        }
    })

    const formattedColor: ColorsColumn[] = colors.map((item)=>({
        id:item.id,
        name:item.name,
        value:item.value,
        createdAt: format(item.createdAt, "MMMM do, yyyy")

    }))
    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
              <ColorsClient data={formattedColor}/>

            </div>
        </div>
    )
}

export default ColorPage