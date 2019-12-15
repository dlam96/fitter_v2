import {
  LOG_IN,
  SIGN_UP,
  LOG_OUT,
  RESET_PREF,
  CUSTOM_PREF,
  LOAD_START,
  LOAD_STOP,
} from './actionTypes';
// Actions function defines the parameters, (action)type and payload
// Action is the function which the reducer then sets the state new value from payload
// Action -> Reducer
// logged reducer functions
export const login = (token, email, firstName, lastName, age, description) =>
  // console.log('firstname LN ', firstName, lastName),
  ({
    type: LOG_IN,
    payload: {
      token,
      email,
      firstName,
      lastName,
      age,
      description,
    },
  });
export const signup = () => ({
  type: SIGN_UP,
});
export const logout = () => ({
  type: LOG_OUT,
});

// preferences reducer functions
export const setPref = (
  showMen,
  showWomen,
  showUser,
  distance,
  upperAgeRange,
  lowerAgeRange,
) => ({
  type: CUSTOM_PREF,
  payload: {
    showMen,
    showWomen,
    showUser,
    distance,
    upperAgeRange,
    lowerAgeRange,
  },
});

// reset pref
export const resetPref = () => ({
  type: RESET_PREF,
});

// loading screen bools
export const loadingOn = () => ({
  type: LOAD_START,
});
export const loadingOff = () => ({
  type: LOAD_STOP,
});
