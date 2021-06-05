import { IAuthState } from "./IAuthState";
import { IMessagePage } from "./IMessagePage";
import { IProfilePage } from "./IProfilePage";
import { IUsersPage } from "./IUsersPage";

export interface IAppState {
    profilePage: IProfilePage;
    messagePage: IMessagePage;
    usersPage: IUsersPage;
    auth: IAuthState;
};