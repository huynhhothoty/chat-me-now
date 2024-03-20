import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getOneBox } from '../../services/boxService';

export function useBoxChat() {
    const [params] = useSearchParams();

    const boxId = params.get('room');

    const { data: box, isLoading: isLoadingBox } = useQuery({
        queryKey: ['box', boxId],
        queryFn: () => getOneBox({ boxId }),
    });

    return { box, isLoadingBox };
}
