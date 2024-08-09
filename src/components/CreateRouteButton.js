import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useEffect, useContext } from 'react';
import { getRouteMatrix } from '@/utils/laravelapi';

const CreateRouteButton = () => {
    const { waypoints } = useContext(WaypointsContext);
    const { startingPoint } = useContext(WaypointsContext);

    useEffect(() => {
        console.log(waypoints)
    }, [waypoints]);

    useEffect(() => {
        console.log(startingPoint)
    }, [startingPoint]);

    const handleCreateRoute = async () => {
        console.log(startingPoint)
        console.log(waypoints)
        const response = await getRouteMatrix(startingPoint, waypoints)
        console.log(response)
    }

    return (
        <div className='create-route'>
            <button className='py-2 px-8 border border-gray-600 bg-gray-600 text-white bold' onClick={() => handleCreateRoute()}>Δημιουργία Δρομολογίου</button>
        </div>
    )
}

export default CreateRouteButton