import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useFormik } from 'formik';
import { signUp } from '../../api/UserApi'
import validationSchema from './validation';
validationSchema
export const SignUp = () => {

    const { LoginIn } = useAuth();

    const { handleSubmit, handleChange, values, handlBlur, errors, touched } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
        },
        onSubmit: async (values, bag) => {
            try {
                const signupResponse = await signUp({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    phoneNumber: values.phoneNumber
                })
                LoginIn(signupResponse.data);
            } catch (error) {
                bag.setErrors({ general: error });
            }
        },
        validationSchema: validationSchema
    })

    return (

        <div className="flex justify-center items-center h-screen">
            <div className="container mx-auto max-w-80">
                <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
                {/* {<div className="text-red-500 mb-4">{console.log("HATA::", errors.general)}</div>} */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block mb-2">Adın</label>
                        <input
                            label="firstName"
                            id="firstName"
                            name='firstName'
                            type="text"
                            onChange={handleChange}
                            handleBlur={handlBlur}
                            value={values.firstName}
                            className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block mb-2">Soyadın</label>
                        <input
                            label="lastName"
                            id="lastName"
                            name='lastName'
                            type="text"
                            value={values.lastName}
                            handleBlur={handlBlur}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            label="email"
                            id="email"
                            name='email'
                            type="email"
                            value={values.email}
                            handleBlur={handlBlur}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Şifre</label>
                        <input
                            label='password'
                            id="password"
                            name='password'
                            type="password"
                            value={values.password}
                            handleBlur={handlBlur}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block mb-2">Telefon Numarası</label>
                        <input
                            label='phoneNumber'
                            id="phoneNumber"
                            name='phoneNumber'
                            type="text"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            pattern="\+90[0-9]{10}"
                            className="border border-gray-400 rounded-md py-2 px-4 w-full" />
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Kayıt Ol</button>
                </form>
            </div>
        </div>

    )
}
