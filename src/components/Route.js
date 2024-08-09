import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useContext } from 'react';

const Route = () => {
    const { optimalRoute } = useContext(WaypointsContext);

    if (!optimalRoute) {
        return null;
    }

    return (
        <div className='google-maps mt-4'>
            <h1 className='text-5xl font-bold my-2'>Δρομολόγιο</h1>
            <p className='my-2'>{ optimalRoute.route }</p>
            <p>Duration: { optimalRoute.duration } seconds</p>
        </div>
    )
}

export default Route