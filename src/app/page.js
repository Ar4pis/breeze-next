import LoginLinks from '@/app/LoginLinks'
import HomePage from '@/components/HomePage'

export const metadata = {
    title: 'Traveling Salesman',
}

const Home = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className='grid grid-cols-12 py-2'>
                <div className='col-span-12'>
                        <LoginLinks/>
                    </div>
                </div>
                <HomePage/>            
            </div>
        </>
    )
}

export default Home
