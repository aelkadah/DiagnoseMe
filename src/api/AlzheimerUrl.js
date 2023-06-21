import axios from "axios";

const zheimerUrl = axios.create({ baseURL: "http://164.92.85.212:80" });

export default zheimerUrl;
