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
        },
        deletebooking (state, action: PayloadAction<string>) {
            state.bookings = state.bookings.filter(tour => tour.id !== action.payload).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        }
    }
})

export const { updatebookings, deletebooking } = bookings.actions;

export default bookings.reducer