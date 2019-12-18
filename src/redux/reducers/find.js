import { LOAD_CARDS } from "../actionTypes";

export default function(
  // Default states
  state = {
    possibles: []
  },
  action
) {
  switch (action.type) {
    case LOAD_CARDS: {
      return {
        possibles: action.payload.possibles
      };
    }
    default:
      return state;
  }
}
