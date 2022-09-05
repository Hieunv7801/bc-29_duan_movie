import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT, USER_LOGIN } from "../constant/common";


export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT
    }
})

request.interceptors.request.use((config) => {
    let userInfo = localStorage.getItem(USER_LOGIN);

    if (userInfo) {
        userInfo= JSON.parse(userInfo);
        //* Bearer tiêu chuẩn json web token
        config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    }
    return config;
});
