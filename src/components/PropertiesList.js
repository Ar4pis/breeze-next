import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useContext } from 'react';
import { deleteProperty } from '@/utils/laravelapi';

const PropertiesList = ({ properties, onPropertyDeleted }) => {
    const { waypoints, addWaypoint, removeWaypoint, deleteWaypoints } = useContext(WaypointsContext);

    const handleWaypoint = (event, property) => {
        if (event.target.checked) {
            addWaypoint(property);
          } else {
            removeWaypoint(property.id);
          }
      }

    const handleDeleteProperty = (event, property) => {
        removeWaypoint(property.id);
        deleteProperty(property.id)
        onPropertyDeleted()
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
                            <input type="checkbox" onChange={(event) => handleWaypoint(event, property)} id={`checkbox-${property.id}`} name={`checkbox-${property.id}`} checked={waypoints.some(waypoint => waypoint.id === property.id)} />
                            <label htmlFor={`checkbox-${property.id}`} className='ml-2'>Σημείο Διαδρομής</label><br/>
                        </div>
                        <div className='mb-2 flex items-center hover:underline hover:cursor-pointer'>
                            <button className='py-2 px-8 border border-gray-600 bg-gray-600 text-white bold' onClick={(event) => handleDeleteProperty(event, property)}>Διαγραφή</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PropertiesList