import { BASE_URL } from "../Constants";
import { toast } from 'react-toastify';

interface RequestOptions<T> {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // Adjust as per your API needs
    body?: T; // Generic type for request body
    headers?: Record<string, string>;
}

interface ApiResponse<T> {
    data: T; // Generic type for response data
    status: number;
    message?: string;
}

export async function apiRequest<T>(url: string, options: RequestOptions<T>): Promise<any> {
    const defaultHeaders = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        ...options.headers // Merge additional headers if provided
    };

    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            ...options,
            headers: defaultHeaders,
            cache: 'force-cache',
            body: options.body ? JSON.stringify(options.body) : undefined // Serialize body if present
        });

        const data: ApiResponse<T> = await response.json();

        if (!response.ok) {
            // Check for specific error message and show custom message
            if (data.message === 'Password mismatch') {
                toast.error('Password is wrong, please check your password');
            } else if(data.message){
                toast.error(data.message || 'Failed to fetch data')
            }
        }

        return data.data; // Return data for successful response
    } catch (error) {
        // Ensure you only log and show errors here
        console.error('Error fetching data:', (error as Error).message);
        // Optionally display a general error message if needed
        toast.error((error as Error).message || 'Failed to fetch data');
        throw error; // Re-throw the error to handle in the component
    }
}
