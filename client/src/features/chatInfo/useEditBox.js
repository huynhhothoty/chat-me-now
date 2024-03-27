import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App as AntApp } from 'antd';
import { updateBox } from '../../services/boxService';

export function useEditBox() {
    const queryClient = useQueryClient();
    const { notification } = AntApp.useApp();

    const showFailedNotice = (message) => {
        notification.error({
            message: 'Failed',
            description: message,
        });
    };

    const { mutate: edit, isPending: isEditing } = useMutation({
        mutationFn: ({ roomId, data }) => updateBox({ roomId, data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['box'] });
        },
        onError: (err) => {
            showFailedNotice(err.message);
        },
    });

    return { edit, isEditing };
}
