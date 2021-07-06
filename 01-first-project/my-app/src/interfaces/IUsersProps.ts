import { IUsers } from "./IUsers";

export interface IUsersProps {
    users: IUsers[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    // setUsers: (users: IUsers[]) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    // setCurrentPage: (pageNum: number) => void;
    // setTotalUsersCount: (totalCount: number) => void;
    onPageChanged:(pageNum: number) => void;
    // followAPI?: {
    //     unfollowUser(id: number): Promise<any>;
    //     followUser(id: number): Promise<any>;
    // };
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
    followingProgress: [];
}