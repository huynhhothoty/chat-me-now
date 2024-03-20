import customAxios from './CustomAxios';
import { msgOfRoomUrl, msgUrl } from '../utils/api/apis';

export async function getAllMsgOfRoom({ roomId }) {
    try {
        const res = await customAxios({
            method: 'get',
            url: msgOfRoomUrl(roomId),
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}

export async function createMsg({ roomId, userId, msg }) {
    try {
        const res = await customAxios({
            method: 'post',
            url: msgUrl,
            data: {
                room: roomId,
                sender: userId,
                message: msg,
            },
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}
