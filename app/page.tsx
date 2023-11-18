import Image from 'next/image'
import { Button, GenerateButton } from '@/components'
import ImportButton from '@/components/ImportButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>
        <h3 className='font-bold text-5xl mb-2'>ScheduLink</h3>
        <p></p>
      </div>

      <div className='upload-cal mt-4 text-center'>
        <h4 className='text-md font-semibold mb-2'>Upload your calendar</h4>
        <ImportButton text="Choose files"/>
      </div>

      <div className='timeslots mt-4 text-center'> 
        <h4 className='text-md font-semibold mb-2'>Choose your availability</h4>
        <div>
          <Button text="Morning"/>
          <Button text="Afternoon"/>
          <Button text="Evening"/>
          <Button text="Night"/>
        </div>
      </div>

      <div className='generate mt-4'>
        <GenerateButton text="Generate"/>
      </div>

    </main>
  )
}
