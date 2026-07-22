react-hook-form

step 1:-
const {register,handleSubmit}=useForm();

function onClik(data){
  log(data)
}

step 2:-

<form
  onSubmit={handleSubmit(onClick)}
>
<Input

{...register("password"/"email"/"name")}
/>

</form>


zod

step 1:- signupSchema.js

step 2:- add the resolver in the react-hook-form

const {register,handleSubmit,formState:{errors}}=useForm({reolver:zodResolver(signupResolver)})

//it's automtic check the validation

step 3:- for the print the error

{errors.password && (
  <p>{errors.password.message}</p>
)}

if errors.password exsits so print this