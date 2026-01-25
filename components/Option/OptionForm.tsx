"use client";

import { OptionsInput } from "@/types/options";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useModalAction } from "../utils/ModalProvider";
import { useAddOption, useUpdateOption } from "@/service/option-query";
import { toast } from 'react-toastify'
import { DefaultOptionInput } from "@/constants/optionConstant";
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import Button from '../UI/Button'

type OptionFormProps = {
  id?: string;
  option: OptionsInput;
};

const OptionForm = ({ id, option }: OptionFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [optionData, setOptionData] = useState(option);
  const {mutate : addOption, isLoading} = useAddOption();
  const {mutate : updateOption, isLoading: isLoadingUpdate} = useUpdateOption(id ?? "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if ((!id && !optionData.name) || (!!id && !optionData.type) || !optionData.name || !optionData.type) {
      toast.error("Please Fill All Fields");
      return;
    }

    if (id) {
      updateOption(optionData, {
        onSuccess: (data) => {
          toast.success("Success update option!");
          queryClient.invalidateQueries({ queryKey: ["allOptions"] })
          closeModal();
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured")
        }
      })
    }
    else {
      addOption(optionData, {
        onSuccess: (data) => {
          toast.success("Success create option!");
          setOptionData(DefaultOptionInput);
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
          <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="name"
            value={optionData?.name} onChange={(e) => setOptionData({ ...optionData, name: e.target.value })} autoComplete='off' />
          <label htmlFor="username" className='-mt-[0.35rem]'>Name</label>
        </FloatLabel>
      </div>
      <div className=''>
        <FloatLabel>
          <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="type"
            value={optionData?.type} onChange={(e) => setOptionData({ ...optionData, type: e.target.value })} autoComplete='off' />
          <label htmlFor="name" className='-mt-[0.35rem]'>Type</label>
        </FloatLabel>
      </div>
      <div className=''>
        <FloatLabel>
          <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="description"
            value={optionData?.description} onChange={(e) => setOptionData({ ...optionData, description: e.target.value })} autoComplete='off' />
          <label htmlFor="password" className='-mt-[0.35rem]'>Description</label>
        </FloatLabel>
      </div>
      <div>
        <Button type='submit' disabled={(!id && !optionData.name) || (!!id && !optionData.type) || !optionData.name || !optionData.type || isLoading || isLoadingUpdate}
          loading={isLoading || isLoadingUpdate}
          className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
          Submit
        </Button>
      </div>
    </form>
  )
};

export default OptionForm;
