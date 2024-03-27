import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/authService';

export function useUser() {
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['user'],
        queryFn: () => getCurrentUser(),
    });

    return { user, isLoading, isAuthenticated: Boolean(user?.name) };
}
