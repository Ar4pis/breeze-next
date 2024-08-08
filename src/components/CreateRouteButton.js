import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useEffect, useContext } from 'react';

const CreateRouteButton = () => {
    const { waypoints } = useContext(WaypointsContext);
    const { startingPoint } = useContext(WaypointsContext);

    useEffect(() => {
        console.log(waypoints)
    }, [waypoints]);

    useEffect(() => {
        console.log(startingPoint)
    }, [startingPoint]);

    return (
        <div className='create-route'>
            <button className='py-2 px-8 border border-gray-600 bg-gray-600 text-white bold' onClick={(event) => handleDeleteProperty(event, property)}>Δημιουργία Δρομολογίου</button>
        </div>
    )
}

export default CreateRouteButton