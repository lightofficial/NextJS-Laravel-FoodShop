import axios from "axios";
import { time } from "console";

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8000' ,
	timeout: 1000,
	headers : {
		"Content-Type": "application/json",
	},
});


export default axiosInstance;