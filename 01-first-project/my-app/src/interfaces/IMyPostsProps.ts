import { IPost } from "./IPost";

export interface IMyPostsProps {
    postsData: IPost[];
    addPost(): void;
    newPostText: string;
    updateNewPostText(newText: string): void;
}