"use server"
import { formInputProps } from '@/Types/Type';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import React from 'react'


const prisma= new PrismaClient()
export async function CreateProfile(data:formInputProps) {
 console.log(data)
 try {
    const newProfile= await prisma.profile.create({
        data
    })
 } catch (error) {
    
 }
}


export default async function getProfiles() {
  try {
    const profiles= await prisma.profile.findMany()
    return profiles;
  } catch (error) {
    console.log("none is available")
  }
}
export async function getProfileById(id:string) {
  try {
    const profile= await prisma.profile.findUnique({
      where:{
        id
      }
    })
    return profile;
  } catch (error) {
    console.log("none is available")
  }
}

export async function updateProfileById(id:string|undefined,data:formInputProps) {
  const {fname,job,techStack} =data
  try {
    if(id){
      const updatedProfile= await prisma.profile.update({
        where:{ 
         id
        },
        data:{
          fname,job,techStack
        } 
    })
    revalidatePath("/")
    console.log(updatedProfile)
    return updatedProfile
    }
  } catch (error) {
     console.log(error)
  }
 }
export async function deleteProfileById(id:string) {
  try {
    if(id){
      const deleletedUser= await prisma.profile.delete({
        where:{
         id
        } 
    })
    revalidatePath("/")
    console.log(deleletedUser)
    return deleletedUser
    }
  } catch (error) {
     console.log(error)
  }
 }
 