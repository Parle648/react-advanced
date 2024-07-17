import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IBooking {
    id: string,
    userId: string,
    tripId: string,
    guests: number,
    date: string | Date,
    trip: {
      title: string,
      duration: number,
      price: number
    },
    totalPrice: number,
    createdAt: string | Date
} 

interface Ibookings {
    bookings: IBooking[]
}

const initialValue: Ibookings = {
    bookings: []
}

const bookings = createSlice({
    name: 'bookings',
    initialState: initialValue ,
    reducers: {
        updatebookings (state, action: PayloadAction<IBooking[]>) {
            state.bookings = [...action.payload]
        }
    }
})

export const { updatebookings } = bookings.actions;

export default bookings.reducer