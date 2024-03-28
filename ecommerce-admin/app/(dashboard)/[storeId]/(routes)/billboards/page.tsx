import  { BillboardForm } from "./[billboardId]/components/billboard-form"

const BillboardsPage = () =>{
    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
              <BillboardForm/>

            </div>
        </div>
    )
}

export default BillboardsPage