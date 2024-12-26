import * as Yup from 'yup'

export const signUp = Yup.object({
    name:Yup.string().min(5).max(10).required('Enter your name'),
    email:Yup.string().email().required('Enter your email'),
    password:Yup.string().min(8).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Please enter 1  special character').required('Enter your password')
}).required('Fill up all the fields')

export const signIn = Yup.object({
    email:Yup.string().email().required('Enter your email'),
    password:Yup.string().min(8).required('Enter your password')
})

