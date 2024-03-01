import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './components/AppLayout';
import ProtectRoute from './components/ProtectRoute';
import { App as AntApp } from 'antd';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

function App() {
    return (
        <AntApp>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <BrowserRouter>
                    <Routes>
                        <Route element={<Login />} path='/login' />
                        <Route
                            path='/'
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
    );
}

export default App;
