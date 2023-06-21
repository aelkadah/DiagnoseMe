import diabetesUrl from "./../api/DiabetesUrl";

// const useDiabetes = async (url, parmas) => {
//   const res = await diabetesUrl.post(url, parmas);
//   return res;
// };

const useDiabetes = async (url, params) => {
  const config = {
    mode: "cors",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const res = await diabetesUrl.post(url, params, config);
  return res;
};

export default useDiabetes;
