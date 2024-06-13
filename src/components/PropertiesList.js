const PropertiesList = ({ properties }) => {
    return (
        <div className='my-2'>
            <h2>PropertiesList</h2>
            <pre>{JSON.stringify(properties, null, 2)}</pre>
        </div>
    )
}

export default PropertiesList