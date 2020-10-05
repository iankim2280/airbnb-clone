import { LOGIN, LOGOUT } from "../actions/types";
const initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isAuth: action.payload.status === "ok",
        loginStatus: action.payload,
      };
    case LOGOUT:
      return {
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
