import Image from 'next/image'
import { GenerateButton, ImportButton, AvailabilityInput, DateInput } from '@/components'
import * as ical from 'node-ical'
import axios, { AxiosResponse, AxiosError } from 'axios'
import * as fs from 'fs'
import * as path from 'path'

function readFileAsBase64(filePath: string): string {  
   // Ensure the file path is absolute   
   const absolutePath = path.resolve(filePath);    
   // Read file as a buffer   
   const fileBuffer = fs.readFileSync(absolutePath);    
   // Convert the file buffer to a base64 string   
   const base64String = fileBuffer.toString('base64');    
   return base64String; }



const events1 = "file://calendar1.ics;base64," + readFileAsBase64('public/resources/calendar(2).ics')
const events2 = "file://calendar1.ics;base64," + readFileAsBase64('public/resources/calendar(3).ics')
let cals: Array<String> = [events1, events2]
const AGEMO_API_KEY = 'KikSukQvmY3m1RPzNZiDy64CV1XlR5Su2bYJlgP3';
const time_range = {
  start: new Date(2023, 11, 18, 9, 0, 0),
  end: new Date(2023, 11, 18, 21, 0, 0)
}
const date_range = {
  start: new Date(2023, 10, 1),
  end: new Date(2023, 10, 23)
}



const duration = '1'
let executionId = ''

const getAPIres = async (executionId: string) => {
  const response = await axios.get(`https://api.agemo.ai/execution-status?execution_id=${[executionId]}`, {
        headers: {
            'x-api-key': 'KikSukQvmY3m1RPzNZiDy64CV1XlR5Su2bYJlgP3'
        }
    })
    .then(response => {
        console.log(response.data);
        return response.data
    })
    .catch(error => {
        console.error(error);
    });
  // console.log(execData)
  // console.log('Here is this')
}

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
    // console.log(response.data);
    executionId = response.data.execution_id;
    console.log(getAPIres(executionId))
    let currstatus = await getAPIres(executionId)
    console.log(currstatus)
    while (currstatus.status == 'RUNNING'){
      let currstatus = await getAPIres(executionId)
      console.log("getting API")
    }
    getAPIres(executionId)
    getAPIres(executionId);
})
.catch(error => {
    console.error(error);
});




export default function Home() {
  console.log("Hi");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>
        <h3 className='font-bold text-5xl mb-2'>ScheduLink</h3>
        <p></p>
      </div>

      <div className='upload-cal mt-4 text-center'>
        <h4 className='text-md font-semibold mb-4'>Upload your calendar</h4>
        <ImportButton text="Choose files"/>
      </div>

      <div className='timeslots mt-4 text-center'> 
        <h4 className='text-md font-semibold mb-4'>Choose your availability</h4>
        
        <div className='flex flex-row gap-6 justify-center items-center mb-4'>
          <h4 className='w-48'>Time (24 hour clock):</h4>
          <AvailabilityInput text="Start"/>
          <p>to</p>
          <AvailabilityInput text="End"/>
        </div>

        <div className='flex flex-row gap-6 justify-center items-center mb-2'>
          <h4 className='w-48'>Date (DD/MM/YY):</h4>
          <DateInput text="Start"/>
          <p>to</p>
          <DateInput text="End"/>
        </div>
        
      </div>


      <div className='generate mt-4'>
        <GenerateButton text="Generate"/>
      </div>

    </main>
  )
}
