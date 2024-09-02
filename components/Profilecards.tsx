
import getProfiles, { deleteProfileById } from '@/actions/actions'
import { Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteButton from './Button'

export default async function Profilecards() {
    const profiles = await getProfiles()
  return (
    <div className="grid gap-6 flex-wrap p-10 grid-cols-4">
    {
      profiles?.map((card,i)=>{
        return(
          <div key={i} className="card pb-[15px] shadow-md relative flex text-center flex-col items-center border-[1px] rounded-md overflow-hidden border-blue-500">
      <div className="banner w-full h-[70px] bg-pink-400">banner</div>
      <h1 className='text-[5rem] absolute top-8 transition-all '>🥸</h1>
      <div className="mt-[66px] px-2">
      <h1 className='text-2xl font-extrabold'>{card.fname}</h1>
      <h4>{card.techStack}</h4>
      <h3 className='font-bold'>{card.job}</h3>
      </div>
      <div className="flex justify-between w-full px-10"><Link href={`/update/${card.id}`} className='flex'><Edit/> Edit </Link>
      <DeleteButton id={card.id}/>
      </div>
    </div>
    
        )
      })
    }
    </div>
  )
}
