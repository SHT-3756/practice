//액션 타입
const SET_USER = "set_user";
const CLEAR_USER = "clear_user";
const SET_PHOTO_URL = "set_photo_url";

//액션 생성 함수
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}
export function setPhotoURL(photoURL) {
  return {
    type: SET_PHOTO_URL,
    payload: photoURL,
  };
}
//초기값
const initialUserState = {
  currentUser: null,
  isLoading: true,
};
export default function signup(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        //파이어베이스에서 받은 user정보를 payload에 담은거 가져오기
        currentUser: action.payload,
        //로그인이 잘됐으면 isLoading false로
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
        currentUser: {},
        isLoading: false,
      };
    default:
      return state;
  }
}
