import { UserDeleteOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';

function MemberInfo({ member }) {
    return (
        <div className='my-[4px] flex h-[50px] items-center gap-4 rounded-md border-[2px] border-solid border-black px-3 duration-500 hover:cursor-pointer hover:bg-slate-200'>
            <Avatar src={member.avatar} />
            {member.name}
            <div className='ml-auto'>✅ Online</div>
            <Button className='' danger icon={<UserDeleteOutlined />}>
                Remove
            </Button>
        </div>
    );
}

export default MemberInfo;
