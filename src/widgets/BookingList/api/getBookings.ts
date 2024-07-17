import { appStore } from "../../../app/store";
import getBookingsThunk from "../modules/getBookingsThunk";

export default function getBookings() {
    appStore.dispatch(getBookingsThunk())

    return appStore.getState().bookings.bookings
}