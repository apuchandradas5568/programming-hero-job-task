import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://backend-for-deploy-eryg.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;