import { IUsers } from "./IUsers";

export interface IUsersPage {
    users: IUsers[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
}