import { combineReducers, createStore } from "redux";
import { BTGameOanTuXiReducer } from "./reducers/BTOanTuTiReducer";
const rootReducer = combineReducers({
  BTGameOanTuXiReducer,
});

export const store = createStore(rootReducer);
