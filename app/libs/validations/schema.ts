import { z } from 'zod'

export const FormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(1, 'Zip is required')
})

//for register
export const RegisterFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  company: z.string().min(1, 'Company name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase, one lowercase letter, one number, and one symbol'
    ),
  confirmPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    //@ts-ignore
    .refine((value, param) => param === undefined || value === param?.password, {
      message: 'Passwords do not match',
    }),
});