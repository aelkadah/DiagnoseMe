import diabetesUrl from "./../api/DiabetesUrl";

const useDiabetes = async (url, parmas) => {
  const res = await diabetesUrl.post(url, parmas);
  return res;
};

export default useDiabetes;
