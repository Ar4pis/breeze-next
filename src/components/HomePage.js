'use client'

import { useAuth } from '@/hooks/auth'
import Properties from '@/components/Properties'


const HomePage = () => {
    const { user } = useAuth({ middleware: 'guest' })

    if (!user) {
        return '';
    }

    return (
        <div className='grid grid-cols-12 py-6'>
            <div className='col-span-6 order-1 xl:col-span-2 xl:order-1 px-3 my-3'>
                PROPERTIES
                <Properties />
            </div>
            <div className='col-span-12 order-3 xl:col-span-8 xl:order-2 px-3 my-3'>
                MAP
            </div>
            <div className='col-span-6 order-2 xl:col-span-2 xl:order-2 px-3 my-3'>
                ROUTE WAYPOINTS
            </div>
        </div>
    )
}

export default HomePage