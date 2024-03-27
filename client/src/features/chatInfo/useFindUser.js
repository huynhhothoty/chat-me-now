import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App as AntApp } from 'antd';
import { findUser as findUserApi } from '../../services/userService';

export function useFindUser() {
    const queryClient = useQueryClient();
    const { notification } = AntApp.useApp();

    const showFailedNotice = (message) => {
        notification.error({
            message: 'Failed',
            description: message,
        });
    };

    const { mutate: findUser, isPending: isFinding } = useMutation({
        mutationFn: ({ data, type }) => findUserApi({ data, type }),
        onSuccess: (data) => {
            queryClient.setQueryData(['users'], data);
        },
        onError: (err) => {
            showFailedNotice(err.message);
        },
    });

    return { findUser, isFinding };
}
