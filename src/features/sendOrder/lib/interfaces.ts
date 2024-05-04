export interface ISendOrder{
    setNumber: React.Dispatch<React.SetStateAction<string>>,
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
    check: boolean,
    number: string,
}