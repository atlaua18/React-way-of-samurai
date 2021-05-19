import { IPost } from "./IPost";

export interface IMyPostsProps {
    postsData: IPost[];
    addPost(): void; // () => { newPost: IPost }
    newPostText: string;
    updateNewPostText(newText: string): void;
}