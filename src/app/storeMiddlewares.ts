import { createListenerMiddleware } from "@reduxjs/toolkit";
import { updateToken } from "../shared/libs/slices/tokenSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: updateToken,
    effect: (action) => {
        const token = action.payload;

        if (token === null && window.location.pathname !== "/sign-in") {
            window.location.href = "/sign-in";
        }
    },
});

export default listenerMiddleware;