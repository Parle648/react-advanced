import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { updateTour } from "../../../shared/libs/slices/tour";

const tourInformThunk: any = createAsyncThunk(
    'tour/getOne',
    async ({id, token}: {id: string, token: string}) => {
        appStore.dispatch(toggleLoader())

        const HEADERS = () => {
            return {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "accept": 'application/json',
                    "Authorization": `Bearer ${token}` 
                },
            }
        }

        try {
            const response = await fetch(`https://travel-app-api.up.railway.app/api/v1/trips/${id}`, HEADERS());
            const data = await response.json();

            appStore.dispatch(updateTour(data));
            
        } catch (error) {
            
        } finally {
            appStore.dispatch(toggleLoader())
        }
})

export default tourInformThunk