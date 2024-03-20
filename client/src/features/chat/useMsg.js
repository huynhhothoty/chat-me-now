import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getAllMsgOfRoom } from '../../services/messageService';

export function useMsg() {
    const [params] = useSearchParams();

    const roomId = params.get('room');

    const { data: msg, isLoading: isLoadingMsg } = useQuery({
        queryKey: ['msges', roomId],
        queryFn: () => getAllMsgOfRoom({ roomId }),
    });

    return { msg, isLoadingMsg };
}
