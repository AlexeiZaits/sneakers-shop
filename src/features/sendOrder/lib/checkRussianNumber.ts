export function checkRussianNumber(number:string){
    return +number 
    && number.length <= 12 
    && number.split("").slice(-1)[0] !== " " 
    && number.split("").slice(0)[0] !== " " 
    && number.split("").slice(0)[0] === "+"
    && number.split("").slice(1)[0] === "7"
}