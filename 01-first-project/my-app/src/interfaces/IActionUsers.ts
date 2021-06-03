import { IUsers } from "./IUsers";

export interface IActionUsers {
    type: string;
    users: IUsers[];  
    userId: number;
    currentPage: number;
    count: number;
    isFetching: boolean;
}