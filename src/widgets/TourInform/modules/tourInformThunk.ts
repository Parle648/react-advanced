import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { ITourInform, updateTour } from "../../../shared/libs/slices/tour";
import { IFailedResponse } from "../../../features/SignInForm/modules/signInThunk";
import { toast } from "react-toastify";

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
            let data

            if (!response.ok) {
                data = await response.json() as IFailedResponse;
                toast.error(`${data.error}: ${data.message}`);
    
                throw new Error("error");
            } else {
                data = await response.json() as ITourInform;
                appStore.dispatch(updateTour(data));
            }
            
        } catch (error) {
            
        } finally {
            appStore.dispatch(toggleLoader())
        }
})

export default tourInformThunk