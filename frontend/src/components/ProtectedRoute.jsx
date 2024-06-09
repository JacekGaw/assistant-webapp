import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../store/user-context';

const ProtectedRoute = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                if (!accessToken) throw new Error("No access token");

                const response = await fetch('http://srv25.mikr.us:20183/user/verify', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) throw new Error("Failed to verify token");

                const data = await response.json();
                setUser(data.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err.message);
                navigate("/signin", { replace: true });
            }
        };

        checkToken();
    }, [navigate, setUser]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return user ? <Outlet /> : null;
};

export default ProtectedRoute;
