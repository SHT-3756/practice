import { CLEAR_USER, SET_USER, SET_PHOTO_URL } from "../action/types";

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

export default function user_reducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };

    case SET_PHOTO_URL:
      return {
        ...state,
        currentUser: { ...state.currentUser, photoURL: action.payload }, // 기존의 것은 두고 photoURL만 바꾸게!
        isLoading: false,
      };
    default:
      return state;
  }
}
