import {
    ArrowRightOutlined,
    CloseOutlined,
    SwapOutlined,
    UserAddOutlined,
} from '@ant-design/icons';
import { App, Button, Col, Flex, Row, Spin } from 'antd';
import { useState } from 'react';
import AddMemberModal from './AddMemberModal';
import { useDeleteBox } from './useDeleteBox';
import { useBoxChat } from './useBoxChat';

function Options() {
    const [openAdd, setOpenAdd] = useState(false);
    const { modal } = App.useApp();
    const { removeBox, isRemoving } = useDeleteBox();
    const { box } = useBoxChat();
    const handleDeleteRoom = () => {
        modal.confirm({
            onOk: () => removeBox({ roomId: box._id }),
            title: 'You really want to delete this room?',
        });
    };
    return (
        <>
            <Spin fullscreen size='large' spinning={isRemoving} />
            <Row justify='space-around' className='mb-[20px]'>
                <Col>
                    <Button className='border-green-500' icon={<SwapOutlined />}>
                        Rename
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={() => setOpenAdd(true)}
                        className='border-green-500'
                        icon={<UserAddOutlined />}
                    >
                        Add member
                    </Button>
                    <AddMemberModal open={openAdd} setOpen={setOpenAdd} />
                </Col>
                <Col>
                    <Button type='primary' danger icon={<ArrowRightOutlined />}>
                        Leave room
                    </Button>
                </Col>
            </Row>
            <Row justify='space-around' className=''>
                <Col>
                    <Button
                        onClick={handleDeleteRoom}
                        type='primary'
                        danger
                        icon={<CloseOutlined />}
                    >
                        Delete Room
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Options;
