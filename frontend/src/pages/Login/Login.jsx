import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useFormik } from 'formik';
import { loginIn } from '../../api/UserApi';
import validationSchema from './validation';

export const Login = () => {
    const { LoginIn } = useAuth();
    const { handleSubmit, handleChange, values, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values, bag) => {
            try {
                const loginResponse = await loginIn({ email: values.email, password: values.password });
                LoginIn(loginResponse.data)
            } catch (error) {
                bag.setErrors({ general: error.response.data.error })
            }
        },
        validationSchema: validationSchema
    })

    return (
        <div className="flex items-center justify-center h-[70vh] w-screen">
            <div className="rounded-lg m-3 px-4 py-4 shadow-lg bg-white w-1/3">
                <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
                {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            label="email"
                            id="email"
                            name='email'
                            type="email"
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.email}
                            className="border
                        border-gray-400 rounded-md py-2 px-4 w-full text-gray-700 font-sans" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Şifre</label>
                        <input
                            label="password"
                            type="password"
                            id="password"
                            name='password'
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.password}
                            className="border
                        border-gray-400 rounded-md py-2 px-4 w-full text-gray-700 font-sans" />
                    </div>
                    <button type="submit" className=" bg-green-500 text-white py-2 px-4 rounded-md transatio hover:bg-green-600 ease-out duration-300">Giriş Yap</button>
                </form>
            </div>
        </div>
    );
};


