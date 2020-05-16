import { JOURNEY_TYPE } from "../types";

export function jorneyAction(data) {
  return {
    type: JOURNEY_TYPE,
    payload: data,
  };
}
