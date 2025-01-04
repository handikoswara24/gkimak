'use client'
import { useLoginAdmin } from '@/service/login-query';
import { accessTokenAtom, userDataAtom } from '@/store/loginAtom'
import { LoginInput } from '@/types/user';
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Button from '../UI/Button';

const Login = () => {
    const [, setToken] = useAtom(accessTokenAtom);
    const [, setUserData] = useAtom(userDataAtom);
    const [loginInput, setLoginInput] = useState<LoginInput>({ password: "", username: "" });
    const {password, username} = loginInput;
    const {mutate: login, isLoading} = useLoginAdmin();

    const onLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!password || !username) {
            toast.error("Please fill all fields");
            return;
        }

        login(loginInput, {
            onSuccess: (data) => {
                toast.success("Success");
                setLoginInput({ password: "", username: "" });
                setToken(data?.token);
                setUserData(data);
            },
            onError: (error: any) => {
                toast.error(error?.data?.errMessage);
            }
        })
    }

    return (
        <form onSubmit={(e) => onLogin(e)}>
        <div className="m-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input value={username} onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username" autoComplete='off' />
        </div>
        <div className="m-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input value={password} onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="password" placeholder="Password" autoComplete='off' />
        </div>
        <div className="flex items-center justify-between m-4">
            <Button type='submit' className='bg-blue-500 min-h-[2.5rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center disabled:bg-gray-400 cursor-not-allowed'
                loading={isLoading} disabled={isLoading || (!password || !username)}>
                Sign In
            </Button>
        </div>
    </form>
    )
}

export default Login