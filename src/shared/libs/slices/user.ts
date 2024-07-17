import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
    createdAt: null | string | Date,
    email: null | string,
    fullName: null | string,
    id: null | string
}

const initialState: IUser = {
    createdAt: null,
    email: null,
    fullName: null,
    id: null
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser (state, action: PayloadAction<IUser>) {
            state.createdAt = action.payload.createdAt;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.id = action.payload.id;
        }
    }
})

export const { updateUser } = user.actions;

export default user.reducer