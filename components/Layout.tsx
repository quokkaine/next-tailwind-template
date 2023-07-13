import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen text-white bg-dark">
            <Navbar />
            <main className="flex flex-col items-center justify-center flex-auto px-10">
                <div className="container flex flex-col items-center justify-center gap-4 px-4 mx-auto max-w-7xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
