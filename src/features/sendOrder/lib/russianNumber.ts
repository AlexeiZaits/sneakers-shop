
export function CheckRussianNumber(number:string){
    console.log(number.split("").slice(1)[0])
    return +number && number.length <= 12 && number.split("").slice(-1)[0] !== " " 
    && number.split("").slice(0)[0] !== " " 
    && number.split("").slice(0)[0] === "+"
    && number.split("").slice(1)[0] === "7"
}