const SEND_MESSAGE = "SEND-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
    // newMessageText: "",
};

export const messageReducer = (state = initialState, action) => {
    function getId() {
        let id = 0;
        for (let i = state.messagesData.length - 1; i > 0; i++) {
            id = state.messagesData[i].id + 1;
            console.log(id);
            break;
        }
        return id;
    }

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: getId(),
                // message: state.newMessageText,
                message: action.newMessageBody,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            };
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.messageText,
        //     };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

// export const updateNewMessageTextActionCreator = (text) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     messageText: text,
// });
