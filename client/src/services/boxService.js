// import axios from 'axios';
import customAxios from './CustomAxios';
import { boxUrl, boxUrlOfUser, getOneBoxUrl, updateBoxUrl } from '../utils/api/apis';

export async function updateBox({ roomId, data }) {
    try {
        const res = await customAxios({
            method: 'patch',
            url: updateBoxUrl(roomId),
            data: data,
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}
export async function getAllBoxOfMe({ userId }) {
    try {
        const res = await customAxios({
            method: 'get',
            url: boxUrlOfUser(userId),
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}

export async function getOneBox({ boxId }) {
    try {
        const res = await customAxios({
            method: 'get',
            url: getOneBoxUrl(boxId),
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}
export async function createBox({ data }) {
    try {
        const res = await customAxios({
            method: 'post',
            url: boxUrl,
            data: data,
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}
export async function deleteBox({ roomId }) {
    try {
        const res = await customAxios({
            method: 'delete',
            url: getOneBoxUrl(roomId),
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}
