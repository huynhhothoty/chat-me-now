// import axios from 'axios';
import customAxios from './CustomAxios';
import { boxUrlOfUser, getOneBoxUrl } from '../utils/api/apis';

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
