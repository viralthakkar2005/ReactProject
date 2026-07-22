import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '../Input';
import Button from '../Button';
import LoginSchema from '../../schemas/LoginSchema';

export default function Login() {

  const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(LoginSchema)});

//   useForm return this values

//   {
//   values(here is register),
//   handleSubmit,
//   watch,
//   setValue,
//   getValues,
//   reset,
//   resetField,
//   trigger,
//   setError,
//   clearErrors,
//   formState,
//   control,
//   unregister,
//   ...
// }

  const onSubmit=(data)=>{
    console.log("Login page:",data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-500">
            Login to your account
          </p>

          <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4"
          >

          <Input
          type="email"
          placeholder="enter your email"
          {...register("email")}

          //all other props like onChnage,onBlur automtic attaching in this inout tag
          //here we all other props store in register
          //include ref also automtic add we don't do this ref
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}

          <Input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

          <Button
            type="submit"
            className="w-full"
          >
            Login
          </Button>

          </form>

          <p className="mt-6 text-center">
          Don't have an account?

          <Link
            to="/signup"
            className="ml-1 font-semibold text-indigo-600"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  )
}
