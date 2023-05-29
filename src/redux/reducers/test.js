export const counter = (state = { counter: 0 }, action) => {
  if (action.type === "inc") {
    return { state: state.counter + 1 };
  } else return state;
};
