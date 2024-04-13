export interface BillBoard {
    id: string
    name:string
    imageUrl:string
}

export interface Category {
    id: string
    name:string
    billboard: BillBoard
}