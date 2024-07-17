import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { updateTours } from "../../../shared/libs/slices/tours";

const getToursThunk: any = createAsyncThunk(
    'tours/getAll',
    async (token: string) => {
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
            const response = await fetch('https://travel-app-api.up.railway.app/api/v1/trips', HEADERS());

            const tours = await response.json();

            if (!response.ok) {
                throw new Error("error");
            }

            appStore.dispatch(updateTours(tours))
        } catch (error) {
            
        } finally {
            appStore.dispatch(toggleLoader())
        }
    }
)

export default getToursThunk