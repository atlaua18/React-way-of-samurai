import { IUsers } from "./IUsers";

export interface IUsersProps {
    users: IUsers[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: IUsers[]) => void;
}