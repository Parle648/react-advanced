import { appStore } from "../../../app/store";
import { updateToken } from "../../../shared/libs/slices/tokenSlice";
import { updateUser } from "../../../shared/libs/slices/user";

export default function signOut(navigate: any) {
    appStore.dispatch(updateToken(null))
    appStore.dispatch(updateUser({createdAt: null, fullName: null, email: null, id: null}))

    navigate('/sign-up')
}