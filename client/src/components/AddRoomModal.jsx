import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Modal, Input, App, Spin } from 'antd';
import { createBox } from '../services/boxService';
import { useState } from 'react';
import { useUser } from '../features/auth/useUser';

function AddRoomModal({ open, setOpen }) {
    const queryClient = useQueryClient();
    const { notification } = App.useApp();
    const [name, setName] = useState('');
    const { user } = useUser();

    const { mutate: createRoom, isPending: isCreatingRoom } = useMutation({
        mutationFn: (data) => createBox({ data }),
        onSuccess: () => {
            notification.success({
                message: 'Create new room successfully',
            });
            queryClient.invalidateQueries({ queryKey: ['boxes'] });
            setOpen(false);
        },
        onError: (err) => {
            notification.error({
                message: 'Failed',
                description: err.message,
            });
        },
    });
    const handleAdd = () => {
        const real = name.toString().trim();
        if (real === '') {
            notification.info({ message: 'Please enter room name' });
            return;
        }

        createRoom({ name, members: [user._id] });
    };
    return (
        <Modal
            onOk={handleAdd}
            onCancel={() => setOpen(false)}
            open={open}
            centered
            title='Create new room'
        >
            <Spin size='large' spinning={isCreatingRoom} fullscreen />
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                size='large'
                placeholder='Enter room name'
            />
        </Modal>
    );
}

export default AddRoomModal;
