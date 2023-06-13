import baseUrl from "../Api/baseURL";

const useDeleteData = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.delete(url, config);
  return res;
};

export default useDeleteData;
