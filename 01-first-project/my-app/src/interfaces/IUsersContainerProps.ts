import { IUsers } from "./IUsers";

export interface IUsersContainerProps {
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    users: IUsers[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: IUsers[]) => void;
    setTotalUsersCount: (totalCount: number) => void;
    // onPageChanged:(pageNum: number) => void;
    setCurrentPage: (pageNum: number) => void;
    isFetching: boolean;
    toggleIsFetching: (isFetching: boolean) => void;
    followAPI?: {
        unfollowUser(id: number): Promise<any>;
        followUser(id: number): Promise<any>;
    };
}
