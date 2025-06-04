import axios from "axios";

export const BaseURL ='https://test-3-kxlg.onrender.com';

const axiosInstance = axios.create({
    baseURL: "https://test-3-kxlg.onrender.com",
    withCredentials: true
})

export default axiosInstance