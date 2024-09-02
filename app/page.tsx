
import getProfiles, { deleteProfileById } from '@/actions/actions'
import Profilecards from '@/components/Profilecards'
import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export  default async function page() {
  

  return (
    <div>
      <div className="bg-purple-400  h-screen">
       <Profilecards/>
      </div>
    </div>
  )
}
