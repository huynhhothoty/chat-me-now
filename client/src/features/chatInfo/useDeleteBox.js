import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App as AntApp } from 'antd';
import { deleteBox } from '../../services/boxService';
import { useNavigate } from 'react-router-dom';

export function useDeleteBox() {
    const queryClient = useQueryClient();
    const { notification } = AntApp.useApp();
    const navigate = useNavigate();

    const showSuccessNotice = () => {
        notification.success({
            message: 'Delete room successfully',
        });
    };
    const showFailedNotice = (message) => {
        notification.error({
            message: 'Failed',
            description: message,
        });
    };

    const { mutate: removeBox, isPending: isRemoving } = useMutation({
        mutationFn: ({ roomId }) => deleteBox({ roomId }),
        onSuccess: () => {
            navigate('/chat');
            showSuccessNotice();
            queryClient.clear();
        },
        onError: (err) => {
            showFailedNotice(err.message);
        },
    });

    return { removeBox, isRemoving };
}
