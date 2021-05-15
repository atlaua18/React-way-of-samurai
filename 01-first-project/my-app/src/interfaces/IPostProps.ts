import { IPost } from "./IPost";

export interface IPostProps {
    postsData: IPost[];
    addPost(postText: any): { newPost: IPost };
}