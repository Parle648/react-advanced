import { createAsyncThunk } from "@reduxjs/toolkit";
import { appStore } from "../../../app/store";
import { toggleLoader } from "../../../shared/libs/slices/isLoading";
import { updateToken } from "../../../shared/libs/slices/tokenSlice";
import { updateUser } from "../../../shared/libs/slices/user";
import { toast } from "react-toastify";

export interface IHeaders {
    method: 'POST' | 'GET' | 'PUTCH' | 'PUT' | 'DELETE',
    headers: {
        "Content-Type": 'application/json',
        "accept": 'application/json'
    }
    body: string,
}

export interface IData {
    email: string,
    password: string
}

export interface ISuccessResponse {
    user: {
        id: string,
        fullName: string,
        email: string,
        createdAt: string
    },
    token: string
}

export interface IFailedResponse {
    error: string,
    message: string
    statusCode: number
}


const REQUEST_HEADERS = (data: IData): IHeaders => {
    return {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "accept": 'application/json'
        },
        body: JSON.stringify(data)
    }
}


const signInThunk: any = createAsyncThunk(
    '/auth/sign-up',
    async ({userCredentials, navigate}: {userCredentials: IData, navigate: any}, { dispatch }) => {
      dispatch(toggleLoader());

        try {
            const response = await fetch(
            'https://travel-app-api.up.railway.app/api/v1/auth/sign-in', 
            REQUEST_HEADERS(userCredentials)
            );

            let data: ISuccessResponse | IFailedResponse

            if (!response.ok) {
                data = await response.json() as IFailedResponse;
                toast.error(`${data.error}: ${data.message}`);
                throw new Error("error");
            } else {
                data = await response.json() as ISuccessResponse;
            }

            
            await appStore.dispatch(updateToken(data.token))
            await appStore.dispatch(updateUser(data.user))
            await navigate('/')
            return data
        } catch (error) {
            throw error;
        } finally {
            dispatch(toggleLoader());
        }
    }
);

export default signInThunk