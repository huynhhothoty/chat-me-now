import { ArrowRightOutlined, SwapOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import AddMemberModal from './AddMemberModal';

function Options() {
    const [openAdd, setOpenAdd] = useState(false);
    return (
        <>
            <Flex justify='space-around' className=''>
                <Button className='border-green-500' icon={<SwapOutlined />}>
                    Rename
                </Button>
                <Button
                    onClick={() => setOpenAdd(true)}
                    className='border-green-500'
                    icon={<UserAddOutlined />}
                >
                    Add member
                </Button>
                <Button type='primary' danger icon={<ArrowRightOutlined />}>
                    Leave room
                </Button>
                <AddMemberModal open={openAdd} setOpen={setOpenAdd} />
            </Flex>
        </>
    );
}

export default Options;
