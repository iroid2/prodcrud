"use client"
import { deleteProfileById } from '@/actions/actions'
import { Trash2 } from 'lucide-react'
import React from 'react'

export default function DeleteButton({id}:{id:string}) {
  return (
    <button onClick={async()=>await deleteProfileById(id)}><Trash2 /></button>
  )
}
