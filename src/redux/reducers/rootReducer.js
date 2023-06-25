import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import DoctorsReducer from "./DoctorsReducer";
import ServicesReducer from "./ServicesReducer";
import NewsReducer from "./NewsReducer";
import ConditionsReducer from "./ConditionsReducer";
import AiReducer from "./AiReducer";
import CheckupReducer from "./CheckupReducer";
import PremiumReducer from "./PremiumReducer";

export default combineReducers({
  authReducer: authReducer,
  DoctorsReducer: DoctorsReducer,
  ServicesReducer: ServicesReducer,
  NewsReducer: NewsReducer,
  ConditionsReducer: ConditionsReducer,
  AiReducer: AiReducer,
  CheckupReducer: CheckupReducer,
  PremiumReducer: PremiumReducer,
});
