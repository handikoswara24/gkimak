import { UserInput } from '@/types/user'
import React, { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useModalAction } from '../utils/ModalProvider'
import { useAddUserMutation, useUpdateUserMutation } from '@/service/user-query'
import { toast } from 'react-toastify'
import { DefaultUserInput } from '@/constants/userConstant'
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import Button from '../UI/Button'

type UserFormProps = {
  id?: string,
  user: UserInput
}

const UserForm = ({ id, user }: UserFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [userData, setUserData] = useState(user);
  const { mutate: addUser, isLoading } = useAddUserMutation();
  const { mutate: updateUser, isLoading: isLoadingUpdate } = useUpdateUserMutation(id ?? "");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if ((!id && !userData.password) || (!!id && !userData.role) || !userData.username || !userData.name) {
      toast.error("Please Fill All Fields");
      return;
    }

    if (id) {
      updateUser(userData, {
        onSuccess: (data) => {
          toast.success("Success update user!");
          queryClient.invalidateQueries({ queryKey: ["alluser"] })
          closeModal();
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured")
        }
      })
    }
    else {
      addUser(userData, {
        onSuccess: (data) => {
          toast.success("Success create user!");
          setUserData(DefaultUserInput);
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured")
        }
      })
    }
  }
  return (
    <form className='mt-12 space-y-8 text-xs' onSubmit={onSubmit}>
      <div className=''>
        <FloatLabel>
          <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="username"
            value={userData?.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} autoComplete='off' />
          <label htmlFor="username" className='-mt-[0.35rem]'>Username</label>
        </FloatLabel>
      </div>
      <div className=''>
        <FloatLabel>
          <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="name"
            value={userData?.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} autoComplete='off' />
          <label htmlFor="name" className='-mt-[0.35rem]'>Name</label>
        </FloatLabel>
      </div>
      <div className=''>
        <FloatLabel>
          <InputText type='password' className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="password"
            value={userData?.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} autoComplete='off' />
          <label htmlFor="password" className='-mt-[0.35rem]'>Password</label>
        </FloatLabel>
      </div>
      <div className=''>
        <FloatLabel>
          <InputText type="text" className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="role"
            value={userData?.role ?? ""} onChange={(e) => setUserData({ ...userData, role: e.target.value })} autoComplete='off' />
          <label htmlFor="role" className='-mt-[0.35rem]'>Role</label>
        </FloatLabel>
      </div>
      <div>
        <Button type='submit' disabled={(!id && !userData.password) || (!!id && !userData.role) || !userData.name || !userData.username || isLoading || isLoadingUpdate}
          loading={isLoading || isLoadingUpdate}
          className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default UserForm