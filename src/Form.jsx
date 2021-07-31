import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Form </h1>
      <input
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <br />
      {errors.username && (
        <span className="error">The username is required</span>
      )}
      <br />

      <input
        placeholder="E-mail"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        })}
      />
      <br />
      {errors.email && errors.email.type === "required" && (
        <span className="error">The Email is required</span>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <span className="error">Invalid Email</span>
      )}

      <br />

      <input
        placeholder="Phone"
        {...register("phone", { required: true, pattern: /^07[3-9][0-9]{8}/ })}
      />
      <br />
      {errors.phone && errors.phone.type === "required" && (
        <span className="error">The Phone Number is required</span>
      )}

      {errors.phone && errors.phone.type === "pattern" && (
        <span className="error">Invalid Phone Number</span>
      )}
      <br />

      <input
        placeholder="Password"
        {...register("password", {
          required: true,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}[]:;'<>?,.\/]).{8,}$/
        })}
      />
      <br />
      {errors.password && (
        <span className="error">The Password is required</span>
      )}
      <br />

      <input
        placeholder="Confirm Password"
        {...register("passwordMatched", { required: true })}
      />
      <br />
      {errors.passwordMatched && (
        <span className="error">The Password is required</span>
      )}

      <br />
      <input type="submit" />
    </form>
  );
}
