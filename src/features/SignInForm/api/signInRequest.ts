import { appStore } from "../../../app/store"
import signInThunk from "../modules/signInThunk";

export default function signInRequest(data: any) {
    appStore.dispatch(signInThunk(data));
}