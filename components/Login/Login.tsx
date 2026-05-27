'use client'
import { useLoginAdmin } from '@/service/login-query';
import { accessTokenAtom, userDataAtom } from '@/store/loginAtom'
import { LoginInput } from '@/types/user';
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Button from '../UI/Button';
import { useRouter } from 'next/navigation';
import { Lock, User } from 'lucide-react';

const Login = () => {
    const [, setToken] = useAtom(accessTokenAtom);
    const [, setUserData] = useAtom(userDataAtom);
    const [loginInput, setLoginInput] = useState<LoginInput>({ password: "", username: "" });
    const { password, username } = loginInput;
    const { mutate: login, isLoading } = useLoginAdmin();
    const router = useRouter();

    const onLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!password || !username) {
            toast.error("Harap isi semua field");
            return;
        }

        login(loginInput, {
            onSuccess: (data) => {
                toast.success("Login berhasil");
                setLoginInput({ password: "", username: "" });
                setToken(data?.token);
                setUserData({
                    _id: data._id,
                    name: data.name,
                    role: data.role,
                    username: data.username,
                });
                router.push("/admin/listuser");
            },
            onError: (error: any) => {
                toast.error(error?.data?.errMessage ?? "Login gagal");
            }
        })
    }

    return (
        <form onSubmit={onLogin} className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-black">Masuk ke Admin Panel</h2>
                <p className="mt-1 text-sm text-body">Masukkan kredensial Anda untuk melanjutkan</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-black mb-1.5" htmlFor="username">
                        Username
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-body">
                            <User size={16} />
                        </span>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
                            className="admin-input pl-9"
                            placeholder="Masukkan username"
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-black mb-1.5" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-body">
                            <Lock size={16} />
                        </span>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
                            className="admin-input pl-9"
                            placeholder="Masukkan password"
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isLoading}
                disabled={isLoading || !password || !username}
            >
                Masuk
            </Button>
        </form>
    )
}

export default Login