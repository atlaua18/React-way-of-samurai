import { IMessagePage } from "./IMessagePage";
import { IProfilePage } from "./IProfilePage";

export interface IAppState {
    profilePage: IProfilePage;
    messagePage: IMessagePage;
};