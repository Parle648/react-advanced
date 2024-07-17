import { createSlice } from "@reduxjs/toolkit";

export interface ILoading {
    isLoading: boolean
}

const initialValue: ILoading = {
    isLoading: false
}

const isLoading = createSlice({
    name: 'isLoading',
    initialState: initialValue ,
    reducers: {
        toggleLoader(appStore) {
            appStore.isLoading = !appStore.isLoading;
        }
    }
})

export const { toggleLoader } = isLoading.actions;

export default isLoading.reducer