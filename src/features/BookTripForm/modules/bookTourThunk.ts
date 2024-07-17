import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { toast } from "react-toastify";
import { IFailedResponse, ISuccessResponse } from "../../SignInForm/modules/signInThunk";

const bookTourThunk: any = createAsyncThunk('booking/create', async ({guests, date}: {guests: number, date: string}) => {
    appStore.dispatch(toggleLoader());

    const bodyData = {
        tripId: appStore.getState().tour.id,
        guests: guests,
        date: date
    }

    const HEADERS = () => {
        return {
            method: 'POST',
            headers: {
                "accept": 'application/json',
                "Authorization": `Bearer ${appStore.getState().token.token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(bodyData)
        }
    }

    try {
        const response = await fetch('https://travel-app-api.up.railway.app/api/v1/bookings', HEADERS());
        let data

        if (!response.ok) {
            data = await response.json() as IFailedResponse;
            toast.error(`${data.error}: ${data.message}`);

            throw new Error("error");
        } else {
            data = await response.json() as ISuccessResponse;
            console.log(data);
            
            toast.success(`you create an order!`);
        }

    } catch (error) {
        
    } finally {
        appStore.dispatch(toggleLoader());
    }
})

export default bookTourThunk