import { useEffect, useState } from 'react';
import { getUserProperties } from '@/utils/laravelapi';
import AddNewProperty from './AddNewProperty';
import PropertiesList from './PropertiesList';

const Properties = () => {
    const [properties, setProperties] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProperties = async () => {
        try {
            const propertiesData = await getUserProperties();
            setProperties(propertiesData);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    if (loading) return <p>Loading...</p>;

    //console.log(properties)
    //console.log(user)
    return (
        <div className='my-4'>
            <AddNewProperty onPropertyAdded={fetchProperties}/>
            <PropertiesList properties={properties} onPropertyDeleted={fetchProperties}/>
        </div>
    )
}

export default Properties