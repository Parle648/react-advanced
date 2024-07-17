import { appStore } from "../../../app/store"
import signUpThunk from "../modules/signInThunk";

export default function signInRequest(data: any) {
    appStore.dispatch(signUpThunk(data));
}