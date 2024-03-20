import { useQuery } from '@tanstack/react-query';
import { getAllBoxOfMe } from '../../services/boxService';
import { useUser } from '../auth/useUser';

export function useBoxList() {
    const { user } = useUser();

    const { data: boxList, isLoading: isLoadingBox } = useQuery({
        queryKey: ['boxes'],
        queryFn: () => getAllBoxOfMe({ userId: user._id }),
    });

    return { boxList, isLoadingBox };
}
