import axios from "axios";

const diabetesUrl = axios.create({ baseURL: "http://147.182.201.161/" });

export default diabetesUrl;
