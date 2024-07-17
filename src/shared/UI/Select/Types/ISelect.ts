import { ChangeEvent } from "react";

export default interface ISelect {
    title: string, 
    name: string, 
    options: Option[], 
    dataTestId: string,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
}

export interface Option {
    value: string,
    title: string
}