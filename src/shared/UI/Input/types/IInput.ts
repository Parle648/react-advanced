import { ChangeEvent } from "react";

export default interface IInput {
    title: string,
    type: 'date' | 'password' | 'email'| 'text' | 'number',
    name: string,
    dataTestId: string,
    min?: number,
    max?: number,
    value?: number | string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}