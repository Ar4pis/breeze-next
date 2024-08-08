import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useEffect, useContext } from 'react';

const Map = () => {
    const { waypoints } = useContext(WaypointsContext);

    return (
        <div className='google-maps'>
            <h1>MAP</h1>
        </div>
    )
}

export default Map