import { IAuthState } from "./IAuthState";

export interface IAuthAction {
    type: string;
    data: IAuthState;
}