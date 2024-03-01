import { host } from './host';

// user & authen
export const loginUrl = `${host}/user/login`;
export const logoutUrl = `${host}/user/logout`;
export const registerUrl = `${host}/user/register`;
export const getCurUserUrl = `${host}/user/currentuser`;
export const forgetPassUrl = `${host}/user/forgetpassword`;
export const resetPassUrl = `${host}/user/resetpassword`;
export const changePassUrl = `${host}/user/changepassword`;

//user
export const userUrl = `${host}/user`;