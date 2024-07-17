import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { updatebookings } from "../../../shared/libs/slices/bookings";
import { toast } from "react-toastify";
import { IFailedResponse } from "../../../features/SignInForm/modules/signInThunk";

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

        let data;

        
        
        if (!response.ok) {
            data = await response.json() as IFailedResponse;
            toast.error(`${data.error}: ${data.message}`);
            
            throw new Error("error");
        } else {
            data = await response.json();
            
            await appStore.dispatch(updatebookings(data))
        }

        
    } catch (error) {
        
    } finally {
        appStore.dispatch(toggleLoader()); 
    }
})

export default getBookingsThunk