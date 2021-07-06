import { Dispatch } from "react";
import { authMeAPI } from "../api/api";
import { IAuthAction } from "../interfaces/IAuthAction";
import { IAuthState } from "../interfaces/IAuthState";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: IAuthState = initialState, action: IAuthAction) => {
    switch(action.type) {
        case SET_USER_DATA:
            
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state; 
    }
};

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
        }
    }
};

// thunk
export const getAuthUserData = () => {
    return (dispatch: Dispatch<any>) => {
        authMeAPI.getAuthUserData().then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
};