import * as axios from "axios";

export const getProfile = (id) => {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        withCredentials: true,
    })
};

export const getUsers = (pageSize, currentPage) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {
        withCredentials: true,
    });
};

export const follow = (id) => {
    return  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
        withCredentials: true,
        headers: {
            "API-KEY": "2c1cdd7b-7e8f-4e5e-aff5-347b994154b9", 
        },
    });
};

export const unfollow = (id) => {
    return  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "2c1cdd7b-7e8f-4e5e-aff5-347b994154b9", 
        },
    });
};

export const logIn = () => {
    return  axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
    });
};