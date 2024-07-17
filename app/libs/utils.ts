import { useEffect } from "react";

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
