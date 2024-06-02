import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app',
    withCredentials: true
})


const useAxiosSecure = () => {
    useEffect( () => {
        axiosSecure.interceptors.response.use( res => {
            return res;
        }, error => {
            console.log("Error tracked in the inter", error.response)
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;