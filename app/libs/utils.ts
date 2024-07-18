import { useEffect } from "react";
import { useForm } from "react-hook-form";

// Define the props interface with a generic type
interface UseRedirectOnLoginStatusProps<T> {
    newData?: T; // Accept data of type T, which is expected to have a data property
}

// Custom hook to redirect based on login status
export const useRedirectOnLoginStatus = <T extends { newData: any }>({
    newData,
}: UseRedirectOnLoginStatusProps<T>) => {

  useEffect(() => {
    // Check if data or data.data is undefined
    if (!newData) {
      return; // Exit early if newData is not defined
    }

    // Check if result is an array and has more than one entry
    if (newData) {
      // Store all business information in local storage
      localStorage.setItem(
        "newData",
        JSON.stringify(newData)
      );
      // Redirect to the business page
    } 
  }, [ newData]); // Include navigate and data in the dependency array
};

//helper function for react-form-hooks 
export const useRegisterForm = <T extends unknown>(validationsSchema: T) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: require('@hookform/resolvers/zod').zodResolver(validationsSchema),
      mode: 'onChange', // Enable real-time validation on change
  });

  return { register, handleSubmit, errors };
};