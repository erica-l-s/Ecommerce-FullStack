export interface BillBoard {
    id: string
    label:string
    imageUrl:string
}

export interface Category {
    id: string
    name:string
    billboard: BillBoard
}