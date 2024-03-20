import { useEffect } from 'react';
import { useUser } from '../features/auth/useUser';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

function ProtectRoute({ children }) {
    const { isAuthenticated, isLoading } = useUser();
    const navigate = useNavigate();

    useEffect(
        function () {
            if (!isLoading && !isAuthenticated) navigate('/login', { replace: true });
        },
        [isAuthenticated, isLoading, navigate]
    );

    if (isLoading) return <Spin fullscreen size='large' />;

    return children;
}

export default ProtectRoute;
