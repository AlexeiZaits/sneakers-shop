export interface ICard {
    id: string|number;
    name: string;
    image: string;
    price: number;
    sex: string;
    discount: number;
    description: string;
    isNew: boolean;
    display: boolean|null;
    color: string[],
    brand: "",
    
}

export interface initialStateFilter{
    [key: string]: ICard[]
}