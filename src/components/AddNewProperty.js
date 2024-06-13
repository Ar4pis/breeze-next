import { useState } from 'react';
import { addNewProperty } from '@/utils/laravelapi';

const AddNewProperty = ({ onPropertyAdded }) => {
    const [showForm, setShowForm] = useState(false)

    const formClassname = showForm ? 'block' : 'hidden';

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await addNewProperty(data)
            onPropertyAdded();
            setShowForm(false)
        } catch (error) {
            console.log(error.message);
        } 
    }

    return (
        <div className='my-2'>
            <button className='p-2 mb-2 border border-black' onClick={() => setShowForm(!showForm)}>Add New Property</button>
            <div className={formClassname}>
                <form onSubmit={handleFormSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="kaek">Kaek<span className='text-red-600'>*</span></label><br/>
                        <input type="text" id="kaek" name="kaek" required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="name">Name<span className='text-red-600'>*</span></label><br/>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="latitude">Latitude<span className='text-red-600'>*</span></label><br/>
                        <input type="text" id="latitude" name="latitude" required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="longitude">Longitude<span className='text-red-600'>*</span></label><br/>
                        <input type="text" id="longitude" name="longitude" required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="comment">Comment:</label><br/>
                        <textarea id="comment" name="comment" rows="4"></textarea>
                    </div>

                    <button className='py-2 px-8 mb-2 border border-green-600 bg-green-600 text-white bold' type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewProperty