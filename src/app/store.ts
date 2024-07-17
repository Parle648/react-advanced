import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import listenerMiddleware from "./storeMiddlewares";
import { updateToken } from "../shared/libs/slices/tokenSlice";

const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(listenerMiddleware.middleware),
})

appStore.dispatch(updateToken(null))

export { appStore }