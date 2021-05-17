import { IPost } from "./IPost";

export interface IMyPostsProps {
    postsData: IPost[];
    addPost(postText: string): { newPost: IPost };
}