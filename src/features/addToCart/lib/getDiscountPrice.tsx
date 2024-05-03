export function getDiscountPrice(price:number, discount:number){
    return Math.floor(price/100 * (100 - discount))
}