import { appStore } from "../../../app/store";
import tourInformThunk from "../modules/tourInformThunk";

export default function getTourInform(id: string, token: string) {
    appStore.dispatch(tourInformThunk({id: id, token: token}))
}