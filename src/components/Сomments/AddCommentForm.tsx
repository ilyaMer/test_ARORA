import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  comment: string,
};

export default function AddCommentForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("comment")} />
      <input type="submit" />
    </form>
  );
}