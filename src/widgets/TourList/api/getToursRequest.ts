import { appStore } from "../../../app/store";
import getToursThunk from "../modules/getToursThunk";

export default function getToursRequest(token: string) {
    appStore.dispatch(getToursThunk(token))
}

