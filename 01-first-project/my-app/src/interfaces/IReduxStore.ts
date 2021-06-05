import { EmptyObject, Store } from "redux";
import { IAction } from "./IAction";
import { IAuthState } from "./IAuthState";
import { IMessagePage } from "./IMessagePage";
import { IProfilePage } from "./IProfilePage";
import { IUsersPage } from "./IUsersPage";

export interface IReduxStore {
    store: Store<
        EmptyObject & {
            profilePage: IProfilePage;
            messagePage: IMessagePage;
            usersPage: IUsersPage;
            auth: IAuthState;
        },
        IAction
    >;
}