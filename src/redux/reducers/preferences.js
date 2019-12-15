import {RESET_PREF, CUSTOM_PREF} from '../actionTypes';
// Preferences reducers for LOGIN->MAINAPP
export default function(
  // Default states
  state = {
    showMen: true,
    showWomen: true,
    showUser: true,
    distance: 50,
    upperAgeRange: '',
    lowerAgeRange: '',
  },
  action,
) {
  switch (action.type) {
    case CUSTOM_PREF: {
      return {
        showMen: action.payload.showMen,
        showWomen: action.payload.showWomen,
        showUser: action.payload.showUser,
        distance: action.payload.distance,
        upperAgeRange: action.payload.upperAgeRange,
        lowerAgeRange: action.payload.lowerAgeRange,
      };
    }
    case RESET_PREF: {
      return state;
    }
    default:
      return state;
  }
}
