"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import Footer from '../Footer/Footer';

const LoginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('email required'),
  password: yup
    .string()
    .min(6, 'password must be at least 6 characters')
    .required('password required'),
});

export default function LoginForm() {
  const [error, setError] = useState('');

  const onLogin = async (values:any) => {
    try {
      const response = await axios.post('http://localhost:8000/api/users/login', values);
      console.log(response.data);
      window.location.href = '/';
    } catch (err) {
      console.error(err);
      setError("Wrong Password");
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        onLogin(values);
        action.resetForm();
      }}
    >
      {() => {
        return (
          <Form>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-2">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Masuk untuk membeli tiket!
                </h1>
                <div className='flex justify-center mb-0'>
                  <p>Tidak punya akun ?</p>
                  <a className='text-info' href='/register'> Daftar Sekarang</a> 
                </div>
              </div>
              <div className="mt-10">
                <label className="block text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <div className="mt-2">
                  <Field
                    name="email"
                    type="text"
                    className="block w-full rounded-md border-0 p-8 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="email"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="mt-2">
                  <Field
                    name="password"
                    type="password"
                    className="block w-full rounded-md border-0 p-8 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="password"
                    component={'div'}
                    className="text-sm text-red-500"
                  />
                  <div className='password-button' data-pasword-field-btn></div>
                </div>
              </div>
              {error && (
                <div className="text-sm text-red-500 text-center mt-2">{error}</div>
              )}
              <div className="mt-2 text-sm text-white text-center">
                <a href="/reset">Lupa kata sandi?</a>
              </div>
              <button
                type="submit"
                className="w-full mt-6 p-1.5 text-sm font-medium p-8 rounded-md bg-orange-500 text-black font-semibold"
              >
                Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
