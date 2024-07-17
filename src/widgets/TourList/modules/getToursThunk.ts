import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { ITour, updateTours } from "../../../shared/libs/slices/tours";
import { IFailedResponse } from "../../../features/SignInForm/modules/signInThunk";
import { toast } from "react-toastify";

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

            let tours;

            if (!response.ok) {
                tours = await response.json() as IFailedResponse;
                toast.error(`${tours.error}: ${tours.message}`);
    
                throw new Error("error");
            } else {
                tours = await response.json() as ITour[];
                appStore.dispatch(updateTours(tours))
            }

        } catch (error) {
            
        } finally {
            appStore.dispatch(toggleLoader())
        }
    }
)

export default getToursThunk