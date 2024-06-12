import LoginLinks from '@/app/LoginLinks'

export const metadata = {
    title: 'Traveling Salesman',
}

const Home = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className='grid grid-cols-12 py-8'>
                    <LoginLinks/>
                </div>
                <div className='grid grid-cols-12 py-6'>
                    <div className='col-span-6 order-1 xl:col-span-2 xl:order-1 px-3 my-3'>
                        PROPERTIES
                    </div>
                    <div className='col-span-12 order-3 xl:col-span-8 xl:order-2 px-3 my-3'>
                        MAP     
                    </div>
                    <div className='col-span-6 order-2 xl:col-span-2 xl:order-2 px-3 my-3'>
                        ROUTE WAYPOINTS
                    </div>

                </div>             
            </div>
        </>
    )
}

export default Home
