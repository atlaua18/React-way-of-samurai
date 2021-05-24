import { EmptyObject, Store } from "redux";
import { IAction } from "./IAction";
import { IMessagePage } from "./IMessagePage";
import { IProfilePage } from "./IProfilePage";

export interface IReduxStore {
    store: Store<
        EmptyObject & {
            profilePage: IProfilePage;
            messagePage: IMessagePage;
        },
        IAction
    >;
}