'use client'

import { UserInput } from '@/types/user'
import React, { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useModalAction } from '../utils/ModalProvider'
import { useAddUserMutation, useUpdateUserMutation } from '@/service/user-query'
import { toast } from 'react-toastify'
import { DefaultUserInput } from '@/constants/userConstant'
import Button from '../UI/Button'
import FormField from '../UI/FormField'

type UserFormProps = {
  id?: string,
  user: UserInput
}

const ROLE_OPTIONS = [
  { value: 'admin', label: 'Admin' },
  { value: 'user', label: 'User' },
  { value: 'wo', label: 'WO' },
]

const UserForm = ({ id, user }: UserFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [userData, setUserData] = useState(user);
  const { mutate: addUser, isLoading } = useAddUserMutation();
  const { mutate: updateUser, isLoading: isLoadingUpdate } = useUpdateUserMutation(id ?? "");

  const isDisabled = (!id && !userData.password) || !userData.username || !userData.name;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) {
      toast.error("Mohon isi semua field yang wajib");
      return;
    }
    if (id) {
      updateUser(userData, {
        onSuccess: () => {
          toast.success("User berhasil diperbarui!");
          queryClient.invalidateQueries({ queryKey: ["alluser"] })
          closeModal();
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
      })
    } else {
      addUser(userData, {
        onSuccess: () => {
          toast.success("User berhasil ditambahkan!");
          setUserData(DefaultUserInput);
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
      })
    }
  }

  return (
    <form className="admin-form space-y-5" onSubmit={onSubmit}>
      <FormField label="Username" htmlFor="username" required>
        <input
          id="username"
          className="admin-input"
          value={userData?.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          autoComplete="off"
          placeholder="Masukkan username"
        />
      </FormField>

      <FormField label="Nama Lengkap" htmlFor="name" required>
        <input
          id="name"
          className="admin-input"
          value={userData?.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          autoComplete="off"
          placeholder="Masukkan nama lengkap"
        />
      </FormField>

      <FormField
        label="Password"
        htmlFor="password"
        required={!id}
        hint={id ? "Kosongkan jika tidak ingin mengubah password" : undefined}
      >
        <input
          id="password"
          type="password"
          className="admin-input"
          value={userData?.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          autoComplete="new-password"
          placeholder={id ? "Kosongkan jika tidak diubah" : "Masukkan password"}
        />
      </FormField>

      <FormField label="Role" htmlFor="role" required>
        <select
          id="role"
          className="admin-input"
          value={userData?.role ?? ""}
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
        >
          <option value="">Pilih Role</option>
          {ROLE_OPTIONS.map(r => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </FormField>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isDisabled}
          loading={isLoading || isLoadingUpdate}
          fullWidth
          size="lg"
        >
          {id ? "Simpan Perubahan" : "Tambah User"}
        </Button>
      </div>
    </form>
  )
}

export default UserForm
