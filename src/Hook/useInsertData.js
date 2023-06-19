import baseUrl from "../Api/baseURL";

// const useInsertDataWithImage = async (url, parmas) => {
//   const config = {
//     headers: { "Content-Type": "multipart/form-data" },
//   };
//   const res = await baseUrl.post(url, parmas, config);
//   console.log(res.status);
//   return res;
// };

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};

const useInsertData = async (url, parmas) => {
  const res = await baseUrl.post(url, parmas);
  return res;
};

const useInsertDataWithToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export { useInsertData, useInsertDataWithImage, useInsertDataWithToken };
