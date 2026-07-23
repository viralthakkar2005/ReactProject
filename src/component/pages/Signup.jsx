import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom"; 

import Input from '../Input'
import Button from '../Button'
import { signupSchema } from '../../schemas/signupSchema'
import { account,ID } from '../../appwrite/auth'


export default function Signup() {

  const {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm(
    {resolver: zodResolver(signupSchema),
      //Whenever the form is submitted (or validated), use signupSchema to validate the data.
    });

    const navigate = useNavigate();


  async function onClick(data) {
  try {
    const user = await account.create(
      ID.unique(),
      data.email,
      data.password,
      data.fullName
    );
    console.log("register");
     navigate("/");
    
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-gray-500">
          Sign up to continue
        </p>


        <form
        onSubmit={handleSubmit(onClick)}
        className="mt-6 space-y-4"
        >
          
          <Input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className='text-red-500 text-sm'>
              {errors.fullName.message}
            </p>
          )}

          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />

          {errors.email && (
            <p className='text-red-500 text-sm'>
              {errors.email.message}
            </p>
          )}

          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>
              {errors.password.message}
            </p>
          )}



          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {
            errors.confirmPassword && (
              <p className='text-sm text-red-500'>
                {errors.confirmPassword.message}
              </p>
            )
          }

          <Button
            type="submit"
            className="w-full"
          >
            Sign Up
          </Button>
        </form>
  
        <p className="mt-6 text-center">
          Already have an account?

          <Link
            to="/login"
            className="ml-1 font-semibold text-indigo-600"
          >
            Login
          </Link>
        </p>


      </div>
    </div>
  )
}
