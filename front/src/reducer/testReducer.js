import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "name", // 구분하기 위한 이름
  initialState: {
    isLoggedIn: false,
    accessToken: "",
    boards: [],
    board: {},
    myProfile: {},
    userProfile: {},
  }, // 여기에 모든 데이터가 저장이 됌
  reducers: {
    //조건문
    toggleIsLoggedIn: (state, action) => {
      // state 파라미터 안에 initialState 정보가 들어있음, dispatch를 이용해 전달한 데이터는 action 파라미터로 받아짐 ex) dispatch(true) => action.payload 값은 true
      state.isLoggedIn = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    setMyProfileInfo: (state, action) => {
      state.myProfile.id = action.payload;
    },
    setUserProfileInfo: (state, action) => {
      state.userProfile = action.payload;
    },
    setRank: (state, action) => {
      state.rankingData = action.payload;
    },
  },
});

export const actions1 = slice.actions; // dispatch를 이용해 데이터를 바꿔주기 위해

export default slice; // store에 세팅해주기 위해
