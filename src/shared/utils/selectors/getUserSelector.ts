import { IUser } from "../../libs/slices/user";

export const getUserSelector = (store: any): IUser => store.user;