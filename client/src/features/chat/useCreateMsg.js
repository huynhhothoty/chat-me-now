import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMsg as createMsgApi } from '../../services/messageService';
import { App } from 'antd';

export function useCreateMsg() {
    const queryClient = useQueryClient();
    const { notification } = App.useApp();

    const showFailedNotice = (message) => {
        notification.error({
            message: 'Failed',
            description: message,
        });
    };

    const { mutate: createMsg, isPending: isCreatingMsg } = useMutation({
        mutationFn: ({ roomId, userId, msg }) => createMsgApi({ roomId, userId, msg }),
        onError: (err) => {
            showFailedNotice(err.message);
        },
    });

    return { createMsg, isCreatingMsg };
}
