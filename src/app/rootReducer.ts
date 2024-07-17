import { combineReducers } from "@reduxjs/toolkit";
import tokenSlice from "../shared/libs/slices/tokenSlice";
import isLoading from "../shared/libs/slices/isLoading";
import user from "../shared/libs/slices/user";
import tours from "../shared/libs/slices/tours";
import tour from "../shared/libs/slices/tour";
import bookings from "../shared/libs/slices/bookings";

const rootReducer: any = combineReducers({
    token: tokenSlice,
    user: user,
    tours: tours,
    tour: tour,
    bookings: bookings,
    isLoading: isLoading,
})

export { rootReducer }