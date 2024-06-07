export interface CartItem{
    id:number,
    name:string,
    img:string,
    requiredOptions?:{},
    addOns?:{},
    quantity:number,
    price:number,
}