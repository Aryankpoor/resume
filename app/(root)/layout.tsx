import { ReactNode } from 'react'
import Header from '@/components/Header'
const layout = ({ children }: {children: ReactNode}) => {
  return (
    <main className = "root-container">
        <div className="mx-auto max-w-7xl">
            <Header />
            <div className='mt-2  0 pb-20'>{children}</div>
        </div>
    </main>
  )
}

export default layout