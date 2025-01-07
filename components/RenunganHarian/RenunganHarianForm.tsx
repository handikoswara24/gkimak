'use client'

import { RenunganHarianInput } from '@/types/renunganharian';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import { useAtom } from 'jotai';
import { userDataAtom } from '@/store/loginAtom';
import { Calendar } from 'primereact/calendar';
import Button from '../UI/Button';
import { FileUpload } from 'primereact/fileupload';
import { useQueryClient } from 'react-query';
import { useModalAction } from '../utils/ModalProvider';
import { useAddRenunganMutation, useUpdateRenunganMutation } from '@/service/renungan-query';
import { toast } from 'react-toastify';
import { DEFAULTRENUNGANHARIAN } from '@/constants/renunganHarianConstant';

type RenunganHarianFormType = {
  data: RenunganHarianInput,
  id?: string
}


const RenunganHarianForm = ({ data, id }: RenunganHarianFormType) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [updateImage, setUpdateImage] = useState(false);
  const [user] = useAtom(userDataAtom);
  const [value, setValue] = useState({...data});
  const { mutate: addRenungan, isLoading: loadingAdd } = useAddRenunganMutation();
  const { mutate: updateRenungan, isLoading: loadingUpdate } = useUpdateRenunganMutation(id ?? "");

  useEffect(() => {
    if (user) {
      setValue({ ...value, author: user.name })
    }
  }, [user])

  const uploadLogo = useRef<any>(null);
  const onUploadLogo = async (e: any) => {
    const file = e.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      const base64data = reader.result;
      setUpdateImage(true);
      setValue({ ...value, image: [base64data as string] });
      uploadLogo?.current?.clear();
    }
  }
  // Editor ref
  const quill = useRef();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link"],
          ["clean"],
        ],
      },
      clipboard: {
        matchVisual: true,
      },
    })
    , []);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "clean",
  ];

  const resetData = () => {
    setValue({...data, author: user?.name ?? ""})
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.author || !value.content || !value.title || !value.date) {
      toast.error("Please Fill all Fields")
      return;
    }

    if (id) {
      const input = {...value};
      if(!updateImage){
        input.image = [];
      }
      updateRenungan(input, {
        onSuccess: (data) => {
          toast.success("Success update renungan!");
          queryClient.invalidateQueries({ queryKey: ["allRenunganAdmin"] })
          closeModal();
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured")
        }
      })
    }
    else {
      const input = {...value};
      resetData();
      addRenungan(input, {
        onSuccess: (data) => {
          setTimeout(() => {
            resetData()
          }, 100)
          toast.success("Success create renungan!");
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured")
        }
      })
    }
  }

  return (
    <div>
      <div className='h-3 font-semibold mb-10' onClick={() => {console.log(value, data); resetData()}}>Renungan Harian</div>
      <form onSubmit={onSubmit}>
        <div className='mb-8'>
          <div className='pl-2 text-xs text-slate-500'>
            Image
          </div>
          {value.image.length > 0 && (
            <div className='w-44'>
              <img src={value.image[0]} className='w-full' />
            </div>
          )}
          <FileUpload ref={uploadLogo} mode='basic' name="logo" accept='image/*' customUpload
            maxFileSize={10000000} uploadHandler={onUploadLogo} className='scale-75 inline-block'
            auto cancelLabel='Remove' />
        </div>
        <div className='space-y-8'>
          <div className=''>
            <FloatLabel>
              <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="title" value={value.title} onChange={(e) => setValue({ ...value, title: e.target.value })} />
              <label htmlFor="title" className='-mt-[0.35rem]'>Title</label>
            </FloatLabel>
          </div>
          <div className=''>
            <FloatLabel>
              <Calendar className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="date" value={new Date(value.date)} onChange={(e) => setValue({ ...value, date: e.value ?? new Date() })}></Calendar>
              <label htmlFor="date" className='-mt-[0.35rem]'>Date</label>
            </FloatLabel>
          </div>
          <div className=''>
            <FloatLabel>
              <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="author" value={value.author} onChange={(e) => setValue({ ...value, author: e.target.value })} />
              <label htmlFor="title" className='-mt-[0.35rem]'>Author</label>
            </FloatLabel>
          </div>
        </div>
        <div className='mt-2'>
          <label className='pl-2 text-xs text-slate-500'>Editor Content</label>
          <QuillEditor
            //@ts-ignore
            ref={(el) => (quill.current = el)}
            theme="snow"
            className='h-32 rounded-xl'
            value={value.content}
            formats={formats}
            modules={modules}
            onChange={(content) => setValue({ ...value, content: content })}
          />
        </div>
        <div className='mt-14'>
          <Button type='submit' disabled={!value.author || !value.content || !value.title || !value.date || loadingAdd || loadingUpdate}
            loading={loadingAdd || loadingUpdate}
            className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RenunganHarianForm