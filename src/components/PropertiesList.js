import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useContext } from 'react';

const PropertiesList = ({ properties }) => {
    const { waypoints, addWaypoint, removeWaypoint, deleteWaypoints } = useContext(WaypointsContext);

    const handleWaypoint = (event, property) => {
        if (event.target.checked) {
            addWaypoint(property);
          } else {
            removeWaypoint(property.id);
          }
          console.log(waypoints)
      }

    return (
        <div className='my-2'>
            <ul>
                {properties.map(property => (
                    <li key={property.id} className="mb-2 p-4 border border-gray-500 rounded-2xl">
                        <p><strong>Kaek:</strong> {property.kaek}</p>
                        <p><strong>Name:</strong> {property.name}</p>
                        <p><strong>Latitude:</strong> {property.latitude}</p>
                        <p><strong>Longitude:</strong> {property.longitude}</p>
                        <p><strong>Comment:</strong> {property.comment}</p>
                        <div className='mb-2 flex items-center'>
                            <input type="checkbox" onClick={(event) => handleWaypoint(event, property)} id={`checkbox-${property.id}`} name={`checkbox-${property.id}`} />
                            <label htmlFor={`checkbox-${property.id}`} className='ml-2'>Σημείο Διαδρομής</label><br/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PropertiesList