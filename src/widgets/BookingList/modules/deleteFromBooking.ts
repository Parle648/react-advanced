import { toast } from "react-toastify";
import { appStore } from "../../../app/store";
import { deletebooking } from "../../../shared/libs/slices/bookings";

export default function deleteFromBooking(id: string) {
    appStore.dispatch(deletebooking(id))

    toast.success('you delete booked tour successfully')
}