import { IPost } from "./IPost";

export interface IProfilePage {
    postsData: IPost[]; 
    newPostText?: string;
};