import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IValue {
    token: string | null
}

const initialValue: IValue = {
    token: null
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: initialValue ,
    reducers: {
        updateToken(appStore, action: PayloadAction<string | null>) {
            appStore.token = action.payload;
        }
    } 
})

export const { updateToken } = tokenSlice.actions;

export default tokenSlice.reducer