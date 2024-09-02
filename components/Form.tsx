"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { formInputProps } from "@/Types/Type"
import { CreateProfile, updateProfileById } from "@/actions/actions"
import { Profile } from "@prisma/client"
import { useRouter } from "next/navigation"


export function CardWithForm({profile}:{profile?:Profile}) {
    const {register,handleSubmit,reset}=useForm<formInputProps>({
      defaultValues:profile
    })
    const router =useRouter()
    const id=profile?.id
    async function onSubmit(data:formInputProps) {
        console.log(data)
        reset()
        try {
            if(id){
              //UPDATE
              const updatedProfile =await updateProfileById(id,data)
              
              router.push("/")
            }else{
              //create
              CreateProfile(data) 
            }
            
        } catch (error) {
            
        }
    }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Enter Infor About Yourself</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fname">Full Name</Label>
              <Input id="name" {...register('fname')} placeholder="Enter Your Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="techStack">techStack</Label>
              <Input id="techStack" {...register('techStack')}  placeholder="Enter Your techStack" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="job">Job</Label>
              <Input id="job"  {...register('job')}  placeholder="Enter Your Job" />
            </div>
          <Button type="submit" className="mx-a bg-black uto text-white">Submit</Button>
          </div>
        </form>
      </CardContent>
      
    </Card>
  )
}
