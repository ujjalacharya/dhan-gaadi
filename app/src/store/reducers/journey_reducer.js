import { JOURNEY_TYPE } from "../types";

export default function (state = { journey_store: null }, action) {
  switch (action.type) {
    case JOURNEY_TYPE:
      return {
        ...state,
        journey_store: action.payload,
      };

    default:
      return state;
  }
}
