import { IAction } from "./IAction";
import { IAppState } from "./IAppState";

export interface IStore {
    _state: IAppState;
    _callSubscriber(s: IAppState): void;
    // getState(): {
    //     ...;
    // };
    getState(): IAppState;
    subscribe(observer: any): void;
    dispatch(action: IAction): void;
}
