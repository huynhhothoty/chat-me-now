import { Col, Row } from 'antd';
import BoxList from '../features/chat/BoxList';

function AppLayout() {
    return (
        <div className='h-screen'>
            <Row className='h-[10vh]'></Row>
            <Row className='h-[90vh]'>
                <Col span={5} className=''>
                    <div className='overflow-y-scroll'>
                        <BoxList />
                    </div>
                </Col>
                <Col span={12} className='border-solid border-blue-500 border-[1px]'>
                    <h1>col</h1>
                </Col>
                <Col span={7}>
                    <h1>col</h1>
                </Col>
            </Row>
        </div>
    );
}

export default AppLayout;
