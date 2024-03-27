import { Avatar, Button, Col, Row, Spin } from 'antd';
import { useUser } from '../features/auth/useUser';

function Header() {
    const { user, isLoading } = useUser();
    return (
        <>
            <Spin fullscreen spinning={isLoading} />

            <Row align='middle' className='w-full'>
                <Col span={3} offset={1}>
                    <Button
                        className=' hover:[backgroundColor:#EEEEEE!important] hover:[color:black!important]'
                        size='large'
                    >
                        ➕ Create new room
                    </Button>
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
