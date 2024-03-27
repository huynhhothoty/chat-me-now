import { SearchOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Empty, Input, Modal, Spin } from 'antd';
import { useEditBox } from './useEditBox';
import { useFindUser } from './useFindUser';
import { useState } from 'react';
import { useUserList } from './useUserList';
import { useBoxChat } from './useBoxChat';
import { App } from 'antd';
import { useSocket } from '../../contexts/SocketContext';

function ListItem({ user, setOpen }) {
    const { edit } = useEditBox();
    const { box } = useBoxChat();
    const { notification } = App.useApp();
    const { socket } = useSocket();

    const handleAddUser = () => {
        const memberIdList = box.members.map((mem) => mem._id);
        const newMemIdList = [...memberIdList, user._id];
        edit(
            { roomId: box._id, data: { members: newMemIdList } },
            {
                onSuccess: () => {
                    setOpen(false);
                    notification.success({ message: 'New user has joined your room' });
                    socket.emit('addMember', { name: user.name });
                },
            }
        );
    };

    return (
        <div className='mb-[13px] flex items-center justify-between'>
            <div className='flex gap-[10px]'>
                <Avatar src={user.avatar} />
                <h3>{user.name}</h3>
            </div>
            <Button onClick={handleAddUser} icon={<UserAddOutlined />}>
                Add
            </Button>
        </div>
    );
}

function AddMemberModal({ open = false, setOpen }) {
    const { isEditing } = useEditBox();
    const { findUser, isFinding } = useFindUser();
    const [data, setData] = useState('');
    const { users, isLoadingUserList } = useUserList();
    return (
        <Modal
            destroyOnClose={true}
            title='Find user'
            open={open}
            centered
            footer={null}
            onCancel={() => setOpen(false)}
            className=''
        >
            <Input
                className='mb-5 mt-7'
                size='large'
                placeholder='Enter name or email to search...'
                prefix={<SearchOutlined className='mr-2' />}
                allowClear
                value={data}
                onChange={(e) => setData(e.target.value)}
                onPressEnter={() => findUser({ data, type: data.includes('@') ? 'email' : 'name' })}
            />
            <h3 className='mb-5'>Result</h3>

            {users?.length > 0 ? (
                <Spin spinning={isFinding || isLoadingUserList || isEditing}>
                    <div className='max-h-[500px] overflow-auto'>
                        {users?.map((user) => (
                            <ListItem key={user._id} user={user} setOpen={setOpen} />
                        ))}
                    </div>
                </Spin>
            ) : (
                <Empty className='flex h-[300px] items-center justify-center' />
            )}
        </Modal>
    );
}

export default AddMemberModal;
