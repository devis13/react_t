import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2c1cdd7b-7e8f-4e5e-aff5-347b994154b9", 
    },
});

export const getProfile = (id) => {
    return  instance.get(`profile/${id}`)
};

export const getUsers = (pageSize, currentPage) => {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`);
};

export const follow = (id) => {
    return  instance.post(`follow/${id}`);
};

export const unfollow = (id) => {
    return  instance.delete(`follow/${id}`);
};

export const logIn = () => {
    return  instance.get("auth/me");
};