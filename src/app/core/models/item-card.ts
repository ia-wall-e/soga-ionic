export interface ItemCard{
    id: number,
    title: string,
    category:  string,
    price: number,
    discountPercentage: number,
    rating: number,
    brand:  string,
    availabilityStatus:  string,
    thumbnail?:  string
}