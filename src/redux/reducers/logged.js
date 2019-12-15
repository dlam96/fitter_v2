import { LOG_IN, SIGN_UP, LOG_OUT } from "../actionTypes";
// Authentication reducers for LOGIN/REGISTER
export default function(
  // Default states
  state = {
    token: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 0,
    description: "Describe Yourself Here!",
    // Auth states
    isAuth: false,
    isAuthenticating: false
  },
  action
) {
  switch (action.type) {
    case LOG_IN: {
      return {
        token: action.payload.token,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        age: action.payload.age,
        description: action.payload.description,
        isAuth: true
      };
    }
    case SIGN_UP: {
      return {
        isAuthenticating: true,
        isAuth: true
      };
    }
    case LOG_OUT: {
      return {
        token: "",
        firstName: "",
        lastName: "",
        age: 0,
        description: "",
        isAuth: false
      };
    }
    default:
      return state;
  }
}
