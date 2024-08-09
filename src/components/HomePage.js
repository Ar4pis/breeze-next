'use client'

import { useAuth } from '@/hooks/auth'
import Properties from '@/components/Properties'
import Map from '@/components/Map'
import Route from '@/components/Route'
import CreateRouteButton from '@/components/CreateRouteButton'


const HomePage = () => {
    const { user } = useAuth({ middleware: 'guest' })

    if (!user) {
        return '';
    }

    return (
        <div className='grid grid-cols-12 pb-6'>
            <div className='col-span-12 sm:col-span-4 px-2 my-3'>
                <h2>PROPERTIES</h2>
                <Properties />
            </div>
            <div className='col-span-12 sm:col-span-8 px-2 my-3'>
                <div className='mb-2'>
                    <CreateRouteButton />
                </div>
                <Route />
                <Map />
            </div>
        </div>
    )
}

export default HomePage