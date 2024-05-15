export interface IFilterCards {
    [key: string]: string[];
}
export interface IFilterButtons{
    setFilter: (value: React.SetStateAction<boolean>) => void;
    
}

export interface IFilterBlock{
    keyFilter: string|number
}