import { Col, Row, Spin } from 'antd';
import { useUser } from '../features/auth/useUser';

function Header() {
    const { user, isLoading } = useUser();
    return (
        <>
            <Spin fullscreen spinning={isLoading} />

            <Row align='middle' className='w-full'>
                <Col
                    span={2}
                    className='flex items-center justify-center rounded-lg p-[10px] [border:1px_solid_black]'
                >
                    <h3>➕ Create new room</h3>
                </Col>
                <Col span={3} offset={9} className='flex items-center gap-[10px] '>
                    <div className='h-[50px] w-[50px] rounded-full bg-gray-400 [border:1px_solid_black]'></div>
                    <h3>{user?.name ?? 'Loading...'}</h3>
                </Col>
            </Row>
        </>
    );
}

export default Header;
