import { Col, Row } from 'antd';
import BoxList from '../features/chat/BoxList';
import ChatBox from '../features/chat/ChatBox';

import ChatInfo from '../features/chatInfo/ChatInfo';
import Header from './Header';
import { useSearchParams } from 'react-router-dom';
import ChatBoxPlaceHolder from './ChatBoxPlaceHolder';

function AppLayout() {
    const [param] = useSearchParams();
    const boxId = param.get('room');
    return (
        <div className='overflow-auto'>
            <Row className='h-[10vh]'>
                <Header />
            </Row>
            <Row className='h-[90vh]'>
                <Col span={5} className=''>
                    <div className='h-[90vh]'>
                        <BoxList />
                    </div>
                </Col>
                <Col span={12} className='h-[90vh]'>
                    {boxId ? <ChatBox /> : <ChatBoxPlaceHolder />}
                </Col>
                <Col span={7}>
                    <ChatInfo />
                </Col>
            </Row>
        </div>
    );
}

export default AppLayout;
