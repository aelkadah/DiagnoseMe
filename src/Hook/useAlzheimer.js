import zheimerUrl from "./../api/AlzheimerUrl";

const useAlzheimer = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const res = await zheimerUrl.post(url, parmas, config);
  console.log(res);
  return res;
};

export default useAlzheimer;
