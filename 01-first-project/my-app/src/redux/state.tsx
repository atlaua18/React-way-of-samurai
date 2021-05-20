import { IAction } from "../interfaces/IAction";
import { IAppState } from "../interfaces/IAppState";
import { IMessagesData } from "../interfaces/IMessagesData";
import { IPost } from "../interfaces/IPost";
import { IStore } from "../interfaces/IStore";
// import { rerenderEntireTree } from "../render";

let store: IStore = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are you?", likesCount: 15 },
                { id: 2, message: "It's my first post", likesCount: 20 },
            ],
            newPostText: "",
        },
        messagePage: {
            dialogsData: [
                {
                    id: 1,
                    name: "Nastya",
                    avatar: "https://cdn.dribbble.com/users/4051260/screenshots/15643099/media/610a2b7dc0d934af453f846d349292be.jpeg?compress=1&resize=1000x750",
                },
                {
                    id: 2,
                    name: "Vitaliq",
                    avatar: "https://cdn.dribbble.com/users/984375/screenshots/15647057/media/0c127c5f15c5778d36f5ace71760f579.jpg?compress=1&resize=1000x750",
                },
                {
                    id: 3,
                    name: "Mother",
                    avatar: "https://cdn.dribbble.com/users/1162650/screenshots/15637865/media/df7d2c7a8570d2db9d07ea46f68057d5.jpg?compress=1&resize=800x600",
                },
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Yo" },
                { id: 3, message: "How are you?" },
                { id: 4, message: "I'm fine" },
            ],
        },
    },
    _callSubscriber (s: IAppState) {
        console.log("state change")
    },

    getState() {
        return this._state;
    },    
    subscribe (observer: any) {
        this._callSubscriber = observer; //паттерн Наблюдатель(observer)
    },
    
    dispatch(action: IAction) {
        if(action.type === "ADD-POST") {
            let newPost: IPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if(action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === "SEND-MESSAGE") {
            let newMessage: IMessagesData = {
                id: 5,
                message: action.messageText,
            };
            this._state.messagePage.messagesData.push(newMessage);
        
            this._callSubscriber(this._state);
        }
    }
};
export default store;


    // addPost() {
    //     let newPost: IPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // sendMessage (messageText: string){
    //     let newMessage: IMessagesData = {
    //         id: 5,
    //         message: messageText,
    //     };
    //     this._state.messagePage.messagesData.push(newMessage);
    
    //     this._callSubscriber(this._state);
    // },

// let rerenderEntireTree = (s: IAppState) => {
//     console.log("state change")
// };

// let state: IAppState = {
//     profilePage: {
//         postsData: [
//             { id: 1, message: "Hi, how are you?", likesCount: 15 },
//             { id: 2, message: "It's my first post", likesCount: 20 },
//         ],
//         newPostText: "",
//     },
//     messagePage: {
//         dialogsData: [
//             {
//                 id: 1,
//                 name: "Nastya",
//                 avatar: "https://cdn.dribbble.com/users/4051260/screenshots/15643099/media/610a2b7dc0d934af453f846d349292be.jpeg?compress=1&resize=1000x750",
//             },
//             {
//                 id: 2,
//                 name: "Vitaliq",
//                 avatar: "https://cdn.dribbble.com/users/984375/screenshots/15647057/media/0c127c5f15c5778d36f5ace71760f579.jpg?compress=1&resize=1000x750",
//             },
//             {
//                 id: 3,
//                 name: "Mother",
//                 avatar: "https://cdn.dribbble.com/users/1162650/screenshots/15637865/media/df7d2c7a8570d2db9d07ea46f68057d5.jpg?compress=1&resize=800x600",
//             },
//         ],
//         messagesData: [
//             { id: 1, message: "Hi" },
//             { id: 2, message: "Yo" },
//             { id: 3, message: "How are you?" },
//             { id: 4, message: "I'm fine" },
//         ],
//     },
// };

// export const addPost = () => {
//     let newPost: IPost = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likesCount: 0,
//     };
//     state.profilePage.postsData.push(newPost);
//     state.profilePage.newPostText = "";
//     rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };

// export const sendMessage = (messageText: string) => {
//     let newMessage: IMessagesData = {
//         id: 5,
//         message: messageText,
//     };
//     state.messagePage.messagesData.push(newMessage);

//     rerenderEntireTree(state);
// };

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer; //паттерн Наблюдатель(observer)
// };
