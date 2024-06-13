import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth'
import { getUserProperties } from '@/hooks/laravelapi';
import AddNewProperty from './AddNewProperty';
import PropertiesList from './PropertiesList';

const Properties = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const [properties, setProperties] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

        fetchProperties();
    }, []);

    if (loading) return <p>Loading...</p>;

    //console.log(properties)
    //console.log(user)
    return (
        <div className='my-4'>
            <h2>Properties Component</h2>
            <AddNewProperty/>
            <PropertiesList properties={properties}/>
        </div>
    )
}

export default Properties