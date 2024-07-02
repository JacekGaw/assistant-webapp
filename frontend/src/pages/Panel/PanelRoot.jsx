import React, {useContext} from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import { UserContext } from '../../store/user-context';

const PanelRoot = () => {
    const {user} = useContext(UserContext);
    useRefreshToken();
    
    return ( 
        <>
            <h1>Hello {user.name}</h1>
        </>
    );
}
 
export default PanelRoot;