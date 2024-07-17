import { appStore } from "../../../app/store";
import bookTourThunk from "../modules/bookTourThunk";

export default function bookTour({guests, date}: {guests: number, date: string}) {
    appStore.dispatch(bookTourThunk({guests, date}))
}