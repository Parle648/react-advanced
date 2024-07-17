import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITourInform {
    id: null | string,
    title: null | string,
    description: null | string,
    level: null | string,
    duration: null | number,
    price: null | number,
    image: null | string,
    createdAt: null | string | Date
} 


const initialValue: ITourInform = {
    id: null,
    title: null,
    description: null,
    level: null,
    duration: null,
    price: null,
    image: null,
    createdAt: null
} 

const tour = createSlice({
    name: 'tour',
    initialState: initialValue ,
    reducers: {
        updateTour (state, action: PayloadAction<ITourInform>) {
            state.id = action.payload.id,
            state.title = action.payload.title,
            state.description = action.payload.description,
            state.level = action.payload.level,
            state.duration = action.payload.duration,
            state.price = action.payload.price,
            state.image = action.payload.image,
            state.createdAt = action.payload.createdAt
        }
    }
})

export const { updateTour } = tour.actions;

export default tour.reducer