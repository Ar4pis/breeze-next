const PropertiesList = ({ properties }) => {
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
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PropertiesList