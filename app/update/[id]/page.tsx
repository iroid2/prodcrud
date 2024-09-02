import { getProfileById } from '@/actions/actions'
import { CardWithForm } from '@/components/Form'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {
  const profile = await getProfileById(id)
  return (
    <div className='flex bg-pink-400 justify-center items-center h-screen'>
      {profile && profile.id && <CardWithForm profile={profile}/>}
    </div>
  )
}
