import Image from 'next/image'
import { Button, GenerateButton } from '@/components'
import ImportButton from '@/components/ImportButton'
import * as ical from 'node-ical'
import axios, { AxiosResponse, AxiosError } from 'axios'


const events1 = ical.sync.parseFile('public/resources/calendar(2).ics')
const events2 = ical.sync.parseFile('public/resources/calendar(3).ics')
let cals: Array<Object> = [events1, events2]
const AGEMO_API_KEY = 'KikSukQvmY3m1RPzNZiDy64CV1XlR5Su2bYJlgP3';
const time_range = {
  start_time: new Date(2023, 11, 18, 9, 0, 0),
  end_time: new Date(2023, 11, 18, 21, 0, 0)
}
const date_range = {
  start_time: new Date(2023, 10, 1),
  end_time: new Date(2023, 10, 23)
}



const duration = '1'
let executionId = ''

axios.post('https://api.agemo.ai/execute', {
    app_id: 'clp405gwx0003jr08epg6khb6',
    inputs: {
        "calendar_files": cals,
		"time_range": time_range,
		"date_range": date_range,
		"num_slots": 3,
		"duration": duration
    }
}, {
    headers: {
        'x-api-key': AGEMO_API_KEY
    }
})
.then(response => {
    console.log("Hi")
    console.log(response.data);
    executionId = response.data.execution_id
})
.catch(error => {
    console.error(error);
});

axios.get(`https://api.agemo.ai/execution-status?execution_id=${[executionId]}`, {
    headers: {
        'x-api-key': 'KikSukQvmY3m1RPzNZiDy64CV1XlR5Su2bYJlgP3'
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});

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
