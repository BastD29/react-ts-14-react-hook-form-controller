import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}

export default function Test1() {
  const { handleSubmit, control } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: "First name is required" }}
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        rules={{ required: "Last name is required" }}
        render={({ field }) => <input {...field} />}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
