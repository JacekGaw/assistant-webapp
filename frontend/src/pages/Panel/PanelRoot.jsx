import React, {useContext} from 'react';
import { UserContext } from '../../store/user-context';

const PanelRoot = () => {
    const {user} = useContext(UserContext);
    return ( 
        <>
            <h1>Hello {user.name}</h1>
        </>
    );
}
 
export default PanelRoot;