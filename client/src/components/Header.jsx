import { Avatar, Button, Col, Row, Spin } from 'antd';
import { useUser } from '../features/auth/useUser';
import { useState } from 'react';
import AddRoomModal from './AddRoomModal';

function Header() {
    const { user, isLoading } = useUser();
    const [isOpenAdd, setOpenAdd] = useState(false);

    const handleOpen = () => {
        setOpenAdd(true);
    };
    return (
        <>
            <Spin fullscreen spinning={isLoading} />

            <Row align='middle' className='w-full'>
                <Col span={3} offset={1}>
                    <Button
                        onClick={handleOpen}
                        className=' hover:[backgroundColor:#EEEEEE!important] hover:[color:black!important]'
                        size='large'
                        disabled={isLoading}
                    >
                        ➕ Create new room
                    </Button>
                    <AddRoomModal open={isOpenAdd} setOpen={setOpenAdd} />
                </Col>
                <Col span={3} offset={9} className='flex items-center gap-[10px] '>
                    <Avatar src={user?.avatar} />
                    <h3>{user?.name ?? 'Loading...'}</h3>
                </Col>
            </Row>
        </>
    );
}

export default Header;
