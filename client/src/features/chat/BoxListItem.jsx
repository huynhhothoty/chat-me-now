import { useSearchParams } from 'react-router-dom';
import { useSocket } from '../../contexts/SocketContext';
import { useEffect } from 'react';

function BoxListItem({ box }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const { socket } = useSocket();
    const handleChooseBox = (id) => {
        socket.emit('joinRoom', id);
        searchParams.set('room', id);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        const roomId = searchParams.get('room');
        if (roomId) socket.emit('joinRoom', roomId);
    }, [searchParams, socket]);

    return (
        <div
            onClick={() => handleChooseBox(box._id)}
            className='my-[5px] flex h-[60px] items-center gap-4 rounded-md border-[2px] border-solid border-red-500 px-3 duration-500 hover:cursor-pointer hover:bg-slate-300'
        >
            <div className='h-[50px] w-[50px] rounded-full [border:1px_solid_black]'></div>
            {box.name}
        </div>
    );
}

export default BoxListItem;
