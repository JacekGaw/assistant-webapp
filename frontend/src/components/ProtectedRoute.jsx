import React, { useEffect, useContext } from 'react';
import { Outlet, useLoaderData, redirect } from 'react-router-dom';
import { UserContext } from '../store/user-context';

const ProtectedRoute = () => {
    const data = useLoaderData();
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data, setUser]);

    return <Outlet />
};

export const loader = async () => {
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
        return data.data;
    } catch (err) {
        console.log(err.message);
        return redirect("/signin");
        // navigate("/signin", { replace: true });
    }
}

export default ProtectedRoute;
