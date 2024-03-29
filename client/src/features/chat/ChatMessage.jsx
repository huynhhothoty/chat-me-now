import { Avatar, Tooltip } from 'antd';

function ChatMessage({ msg, isMine, msgRef, sender, type }) {
    if (type === 'system')
        return (
            <div ref={msgRef} className='my-[10px]'>
                <p className='text-center text-[10px] italic'>{msg}</p>
            </div>
        );
    return (
        <div
            ref={msgRef}
            className={`mb-[6px] flex w-fit max-w-[70%] items-center gap-2 ${isMine ? 'ml-auto' : ''}`}
        >
            {!isMine && (
                <Tooltip placement='right' title={sender.name}>
                    <Avatar size='default' src={sender.avatar} />
                </Tooltip>
            )}

            <div
                className={`${isMine ? 'bg-blue-100' : 'bg-orange-100'} w-fit max-w-[100%] break-words break-all rounded-[30px] px-[25px] py-[7px]`}
            >
                {msg}
            </div>
        </div>
    );
}

export default ChatMessage;
