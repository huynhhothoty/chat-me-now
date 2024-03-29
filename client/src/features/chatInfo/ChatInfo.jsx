import { Spin } from 'antd';
import { useBoxChat } from './useBoxChat';
import MemberInfo from './MemberInfo';
import Options from './Options';

function ChatInfo() {
    const { box, isLoadingBox } = useBoxChat();
    if (isLoadingBox)
        return <Spin size='large' className='flex h-full items-center justify-center' />;
    return (
        <div className='px-[15px]'>
            <h2 className='mb-5'>Members</h2>
            {box.members.map((mem) => (
                <MemberInfo key={mem._id} member={mem} />
            ))}

            <h2 className='mb-5 mt-[35px]'>Options</h2>
            <Options />
        </div>
    );
}

export default ChatInfo;
