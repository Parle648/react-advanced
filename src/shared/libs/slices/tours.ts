import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITour {
    id: string,
    title: string,
    description: string,
    level: string,
    duration: number,
    price: number,
    image: string,
    createdAt: string | Date
} 

interface ITours {
    tours: ITour[]
}

const initialValue: ITours = {
    tours: []
}

const tours = createSlice({
    name: 'tours',
    initialState: initialValue ,
    reducers: {
        updateTours (state, action: PayloadAction<ITour[]>) {
            state.tours = [...action.payload]
        }
    }
})

export const { updateTours } = tours.actions;

export default tours.reducer