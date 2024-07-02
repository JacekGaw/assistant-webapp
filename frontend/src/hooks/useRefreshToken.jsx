import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRefreshToken = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) {
                    throw new Error("No refresh token found");
                }

                const response = await fetch('http://srv25.mikr.us:20183/user/refresh', {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`
                    }
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || 'Failed to refresh token');
                }

                localStorage.setItem('accessToken', data.accessToken);
                console.log("TOKEN REFRESHED");
            } catch (error) {
                console.error('Failed to refresh token', error.message);
                navigate("/signin", { replace: true });
            }
        }, 15 * 60 * 1000); // 16 minutes

        return () => clearInterval(interval);
    }, [navigate]); // Added navigate to dependency array to prevent stale closure

    return null;
};

export default useRefreshToken;
