import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useEffect, useContext } from 'react';

const PropertiesList = () => {
    const { waypoints } = useContext(WaypointsContext);

    useEffect(() => {
        console.log(waypoints)
    }, [waypoints]);

    return (
        <div className='google-maps'>
            <h1>MAP</h1>
        </div>
    )
}

export default PropertiesList