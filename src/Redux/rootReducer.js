import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import artReducer from "./test/artReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "art"],
};
const rootReducer = combineReducers({
  art: artReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
