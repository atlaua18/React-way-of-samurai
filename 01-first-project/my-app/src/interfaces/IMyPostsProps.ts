import { IPost } from "./IPost";

export interface IMyPostsProps {
    postsData: IPost[];
    addPost(): { newPost: IPost };
    newPostText: string;
    updateNewPostText(newText: string): {};
}