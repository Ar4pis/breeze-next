import axios from '@/lib/axios'

export async function getUserProperties() {

    try {
        const response = await axios.get('/api/properties')
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function addNewProperty(data) {
    
    try {
        const response = await axios.post('/api/properties', data);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to add new property: ${error.message}`);
    }
}