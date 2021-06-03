import { IPost } from "./IPost";
import { IProfile } from "./IProfile";

export interface IProfilePage {
    postsData: IPost[]; 
    newPostText?: string;
    profile: IProfile | null;
};