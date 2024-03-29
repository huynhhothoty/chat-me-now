import { UserDeleteOutlined } from '@ant-design/icons';
import { App, Avatar, Button, Popconfirm, Spin } from 'antd';
import { useSocket } from '../../contexts/SocketContext';
import { useUser } from '../auth/useUser';
import { useBoxChat } from './useBoxChat';
import { useEditBox } from './useEditBox';

function MemberInfo({ member }) {
    const { socket } = useSocket();
    const { edit, isEditing } = useEditBox();
    const { box } = useBoxChat();
    const { notification } = App.useApp();
    const { user } = useUser();
    //

    const handleRemove = () => {
        const oldMemListId = box.members.map((ele) => ele._id);
        const newList = oldMemListId.filter((ele) => ele !== member._id);
        if (oldMemListId.length === newList.length) {
            notification.error({ message: 'This user has not been in room' });
            return;
        }
        edit(
            { roomId: box._id, data: { members: newList } },
            {
                onSuccess: () => {
                    notification.success({ message: 'Remove successfully' });
                    socket.emit('remove', {
                        performer: user.name,
                        name: member.name,
                        roomId: box._id,
                    });
                },
            }
        );
    };

    return (
        <Spin spinning={isEditing}>
            <div className='my-[4px] flex h-[50px] items-center gap-4 rounded-md border-[2px] border-solid border-black px-3 duration-500 hover:cursor-pointer hover:bg-slate-200'>
                <Avatar src={member.avatar} />
                {member.name}
                <div className='ml-auto'>✅ Online</div>
                <Popconfirm title='Remove this user from room?' onConfirm={handleRemove}>
                    <Button
                        disabled={member._id === user._id}
                        className=''
                        danger
                        icon={<UserDeleteOutlined />}
                    >
                        Remove
                    </Button>
                </Popconfirm>
            </div>
        </Spin>
    );
}

export default MemberInfo;
