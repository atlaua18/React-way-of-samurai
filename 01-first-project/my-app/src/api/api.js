import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7401ed9e-1c60-4295-afe1-3df38f8b677b",
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
};
export const followAPI = {
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {}).then((response) => {
            return response.data;
        });
    },
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then((response) => {
            return response.data;
        });
    }
};

export const authMeAPI = {
    me() {
        return instance.get(`auth/me`).then((response) => {
            return response.data;
        });
    },
};