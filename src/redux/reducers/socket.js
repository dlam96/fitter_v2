import { ON_CONNECT } from "../actionTypes";

export default function(
  // Default states
  state = {
    socket: null
  },
  action
) {
  switch (action.type) {
    case ON_CONNECT: {
      return {
        socket: action.payload.socket
      };
    }
    default:
      return state;
  }
}
