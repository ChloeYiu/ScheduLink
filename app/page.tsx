import Image from 'next/image'
import { Button } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div>
        <h3 className='font-bold text-5xl mb-2'>ScheduLink</h3>
        <p></p>
      </div>

      <div className='timeslots'> 
        <Button text="Morning"/>
        <Button text="Morning"/>
        <Button text="Morning"/>
        <Button text="Morning"/>
      </div>

    </main>
  )
}
