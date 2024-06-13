import { Nunito } from 'next/font/google'
import '@/app/global.css'
import { WaypointsProvider } from '@/utils/contexts/WaypointsContext'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <WaypointsProvider>
                <body className="antialiased">{children}</body>
            </WaypointsProvider>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
