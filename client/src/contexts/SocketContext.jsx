import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { rootHost } from '../utils/api/host';

const SocketContext = createContext();
function SocketProvider({ children }) {
    const [socket, setSocket] = useState(false);

    useEffect(() => {
        const newSocket = io(rootHost);
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider
            value={{
                socket,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
}

const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) throw Error('context must be used inside its provider');
    return context;
};

export { SocketProvider, useSocket };
