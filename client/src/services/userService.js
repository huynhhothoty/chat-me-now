import { userUrl } from '../utils/api/apis';
import customAxios from './CustomAxios';

export async function findUser({ data, type }) {
    try {
        let baseUrl = '';
        if (type === 'email') baseUrl = `${userUrl}?email=${data}`;
        else baseUrl = `${userUrl}?name=${data}`;

        const res = await customAxios({
            method: 'get',
            url: baseUrl,
        });

        return res.data.data;
    } catch (error) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
    }
}
