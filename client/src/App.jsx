import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './components/AppLayout';
import ProtectRoute from './components/ProtectRoute';
import { App as AntApp } from 'antd';
import { SocketProvider } from './contexts/SocketContext';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

function App() {
    return (
        <SocketProvider>
            <AntApp>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Navigate replace to='chat' />} />
                            <Route element={<Login />} path='/login' />
                            <Route
                                path='/chat'
                                element={
                                    <ProtectRoute>
                                        <AppLayout />
                                    </ProtectRoute>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </QueryClientProvider>
            </AntApp>
        </SocketProvider>
    );
}

export default App;
