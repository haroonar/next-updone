import { useForm } from "react-hook-form";

//helper function for react-form-hooks 
export const useRegisterForm = <T extends unknown>(validationsSchema: T) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: require('@hookform/resolvers/zod').zodResolver(validationsSchema),
      mode: 'onSubmit', // Enable real-time validation on change
  });

  return { register, handleSubmit, errors };
};