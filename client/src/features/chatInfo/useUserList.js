import { useQuery } from '@tanstack/react-query';

export function useUserList() {
    const { data: users, isLoading: isLoadingUserList } = useQuery({
        queryKey: ['users'],
        enabled: false,
    });

    return { users, isLoadingUserList };
}
