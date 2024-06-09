import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRefreshToken = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await fetch('http://srv25.mikr.us:20183/user/refresh', {
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`
                    }
                });
                const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);
            } catch (error) {
                console.error('Failed to refresh token', error);
                navigate("/login", {replace: true});
            }
        }, 18 * 60 * 1000); // 18 minutes

        return () => clearInterval(interval);
    }, []);

    return token;
};

export default useRefreshToken;
