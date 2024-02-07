import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form";

function App() {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const [field,setField]=useState(false);
  const [submitted,setSubmit]=useState(false)
  const onSubmit=(data)=>{
    setField(data)
    setSubmit(true)
  }
  return (
    <>
    <div id="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="regStatus">{submitted?"Registration successfull":null}</div>
      <div><input type="text" placeholder="first name" {...register('firstname',{required:"First name is required!"})} /></div>
      <div><p>{errors.firstname?.message}</p></div>
      <div><input type="text" placeholder="last name" {...register("lastname",{required:"Last Name is required"})}/></div>
      <div><p>{errors.lastname?.message}</p></div>
      <div><input type="text" placeholder="Email" {...register("email",{required:"email is required",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Invalid email"}})} /> </div>
      <div><p>{errors.email?.message}</p></div>
      <div><input type="password" placeholder="password" {...register("password",{required:"password is required!", minLength:{value:4,message:"Password must be more than 4 characters"},maxLength:{value:20,message:"Password cannot be more than 20 characters"}})} /></div>
      <div><p>{errors.password?.message}</p></div>
<br />
        <button id="register" type='submit'>Register</button>
      </form>
    </div>
    </>
  )
}

export default App
