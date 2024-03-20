import { host } from './host';

// user & authen
export const loginUrl = `${host}/user/login`;
export const logoutUrl = `${host}/user/logout`;
export const registerUrl = `${host}/user/register`;
export const getCurUserUrl = `${host}/user/me`;
export const forgetPassUrl = `${host}/user/forgetpassword`;
export const resetPassUrl = `${host}/user/resetpassword`;
export const changePassUrl = `${host}/user/changepassword`;

//user
export const userUrl = `${host}/user`;

//box / room
export const boxUrl = `${host}/room`;
export const getOneBoxUrl = (boxId) => `${host}/room/${boxId}`;
export const boxUrlOfUser = (userId) => `${host}/room?members[$in]=${userId}`;

// message
export const msgUrl = `${host}/message`;
export const msgOfRoomUrl = (roomId) => `${host}/message?room=${roomId}`;
