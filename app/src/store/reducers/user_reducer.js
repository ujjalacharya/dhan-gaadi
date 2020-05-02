import { SIGN_IN, SIGN_OUT } from "../types";

export default function (state={auth: {isAuth: false}}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        auth: {
          token: "dummy_token",
          isAuth: true,
        },
      };
    case SIGN_OUT:
      return {
        ...state,
        auth: {
          token: "",
          isAuth: false,
        },
      };
    default:
      return state;
  }
}
