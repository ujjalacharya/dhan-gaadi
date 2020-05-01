import { SIGN_IN } from "../types";

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
    default:
      return state;
  }
}
