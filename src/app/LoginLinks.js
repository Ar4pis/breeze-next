'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Button from '@/components/Button'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const { logout } = useAuth()

    return (
        <div className="hidden relative top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <div className='text-end'>
                    <h2 className='my-2'>Welcome, {user.name}</h2>
                    <Button onClick={logout}>Logout</Button>
                </div>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-gray-700 underline"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700 underline"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
