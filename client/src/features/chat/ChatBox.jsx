import { SendOutlined } from '@ant-design/icons';
import { Button, Input, Spin } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSocket } from '../../contexts/SocketContext';
import { useUser } from '../auth/useUser';
import ChatMessage from './ChatMessage';
import { useCreateMsg } from './useCreateMsg';
import { useMsg } from './useMsg';
import { useQueryClient } from '@tanstack/react-query';

function ChatBox() {
    const { msg, isLoadingMsg } = useMsg();
    const { user, isLoading } = useUser();
    const [params] = useSearchParams();
    const { createMsg, isCreatingMsg } = useCreateMsg();
    const [newMsg, setNewMsg] = useState('');
    const { socket } = useSocket();
    const queryClient = useQueryClient();
    const msgRef = useRef(null);

    //
    useEffect(() => {
        if (socket === null) return;
        socket.on('newMsg', () => {
            queryClient.invalidateQueries({ queryKey: ['msges'] });
        });
        socket.on('notice', () => {
            queryClient.invalidateQueries({ queryKey: ['msges'] });
        });
    }, [queryClient, socket]);
    useEffect(() => {
        msgRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msg]);
    //
    const roomId = params.get('room');
    //
    const handleSendMsg = () => {
        const realText = newMsg.trim().toString();
        if (realText === '') {
            setNewMsg('');
            return;
        }
        socket.emit('sendMsg');
        createMsg({ roomId, userId: user._id, msg: realText }, { onSuccess: () => setNewMsg('') });
    };

    //
    if (isLoadingMsg || isLoading)
        return <Spin className='flex h-full items-center justify-center' />;

    return (
        <div className='flex h-[100%] flex-col'>
            <div className='flex-grow overflow-y-scroll px-[10px] pb-[20px]'>
                <Spin spinning={isCreatingMsg}>
                    {msg.map((item) => (
                        <ChatMessage
                            key={item._id}
                            msg={item.message}
                            isMine={user._id === item?.sender?._id}
                            sender={item?.sender}
                            msgRef={msgRef}
                            type={item.type}
                        />
                    ))}
                </Spin>
            </div>
            <div className='mb-1 flex items-center gap-5 px-6'>
                <Input
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    size='large'
                    className='px-[15px] [border-radius:20px!important] [border:1px_solid_black]'
                    onPressEnter={handleSendMsg}
                    placeholder='Text something...'
                />
                <Button icon={<SendOutlined />} type='text' size='large' onClick={handleSendMsg} />
            </div>
        </div>
    );
}

export default ChatBox;
