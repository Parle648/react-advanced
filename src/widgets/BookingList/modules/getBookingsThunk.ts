import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { updatebookings } from "../../../shared/libs/slices/bookings";

const getBookingsThunk: any = createAsyncThunk('bookings/getAll', async () => {
    appStore.dispatch(toggleLoader());

    try {
        const response = await fetch('https://travel-app-api.up.railway.app/api/v1/bookings', {
            headers: {
                "accept": 'application/json',
                "Authorization": `Bearer ${appStore.getState().token.token}`,
                "Content-Type": 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('error')
        }

        appStore.dispatch(updatebookings(await response.json()))
        
    } catch (error) {
        
    } finally {
        appStore.dispatch(toggleLoader()); 
    }
})

export default getBookingsThunk