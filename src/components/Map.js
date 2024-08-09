import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useContext } from 'react';

const Map = () => {
    const { optimalRoute } = useContext(WaypointsContext);

    if (!optimalRoute) {
        return null;
    }

    return (
        <div className='google-maps mt-4'>
            <h1 className='text-5xl font-bold my-2'>MAP</h1>
        </div>
    )
}

export default Map