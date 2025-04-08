'use client'

import { RenunganHarianInput } from '@/types/renunganharian';
import React, { useEffect, useMemo, useRef, useState } from 'react'
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
import dynamic from 'next/dynamic';
import { ColorPicker } from 'primereact/colorpicker';

type RenunganHarianFormType = {
  data: RenunganHarianInput,
  id?: string
}

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const RenunganHarianForm = ({ data, id }: RenunganHarianFormType) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [updateImage, setUpdateImage] = useState(false);
  const [user] = useAtom(userDataAtom);
  const [value, setValue] = useState({ ...data });
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
    setValue({ ...data, author: user?.name ?? "" })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.author || !value.content || !value.title || !value.date) {
      toast.error("Please Fill all Fields")
      return;
    }

    if (id) {
      const input = { ...value };
      if (!updateImage) {
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
      const input = { ...value };
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
      <div className='h-3 font-semibold mb-10'>Renungan Harian</div>
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
              <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="title" value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })} autoComplete='off' />
              <label htmlFor="title" className='-mt-[0.35rem]'>Judul</label>
            </FloatLabel>
          </div>
          <div className=''>
            <FloatLabel>
              <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="verse" value={value.verse}
                onChange={(e) => setValue({ ...value, verse: e.target.value })} autoComplete='off' />
              <label htmlFor="verse" className='-mt-[0.35rem]'>Ayat</label>
            </FloatLabel>
          </div>
          <div className=''>
            <label className='pl-2 text-xs text-slate-500'>Isi Ayat</label>
            <QuillEditor
              //@ts-ignore
              ref={(el) => (quill.current = el)}
              theme="snow"
              className='h-32 rounded-xl'
              value={value.isiAyat}
              formats={formats}
              modules={modules}
              onChange={(content) => setValue({ ...value, isiAyat: content })}
            />
          </div>
          <div className='!mt-20'>
            <FloatLabel>
              <Calendar className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="date" value={new Date(value.date)}
                onChange={(e) => setValue({ ...value, date: e.value ?? new Date() })}></Calendar>
              <label htmlFor="date" className='-mt-[0.35rem]'>Tanggal</label>
            </FloatLabel>
          </div>
          <div className=''>
            <FloatLabel>
              <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="author" value={value.author}
                onChange={(e) => setValue({ ...value, author: e.target.value })} autoComplete='off' />
              <label htmlFor="title" className='-mt-[0.35rem]'>Pembuat</label>
            </FloatLabel>
          </div>
        </div>
        <div className='mt-4'>
          <label className='pl-2 text-xs text-slate-500'>Konten</label>
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
        <div className='mt-12'>
          <label className='pl-2 text-xs text-slate-500'>Refleksi</label>
          <QuillEditor
            //@ts-ignore
            ref={(el) => (quill.current = el)}
            theme="snow"
            className='h-32 rounded-xl'
            value={value.refleksi}
            formats={formats}
            modules={modules}
            onChange={(content) => setValue({ ...value, refleksi: content })}
          />
        </div>
        <div className='grid grid-cols-2 gap-4 mt-20'>
          <div>
            <ColorPicker className='border border-slate-400 rounded-sm' value={(value.ayatColor ?? "#000000").replace("#", "")} onChange={(e) => setValue({ ...value, ayatColor: "#" + (e.value?.toString() ?? "000000") })} />
            <span className='ml-4 text-xs'>Warna Ayat</span>
          </div>
          <div>
            <ColorPicker className='border border-slate-400 rounded-sm' value={(value.ayatBgColor ?? "#ffffff").replace("#", "")} onChange={(e) => setValue({ ...value, ayatBgColor: "#" + (e.value?.toString() ?? "ffffff") })} />
            <span className='ml-4 text-xs'>Warna Background Ayat</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <ColorPicker className='border border-slate-400 rounded-sm' value={(value.renunganColor ?? "#000000").replace("#", "")} onChange={(e) => setValue({ ...value, renunganColor: "#" + (e.value?.toString() ?? "000000") })} />
            <span className='ml-4 text-xs'>Warna Renungan</span>
          </div>
          <div>
            <ColorPicker className='border border-slate-400 rounded-sm' value={(value.renunganBgColor ?? "#ffffff").replace("#", "")} onChange={(e) => setValue({ ...value, renunganBgColor: "#" + (e.value?.toString() ?? "ffffff") })} />
            <span className='ml-4 text-xs'>Warna Background Renungan</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <ColorPicker className='border border-slate-400 rounded-sm' value={(value.refleksiColor ?? "#000000").replace("#", "")} onChange={(e) => setValue({ ...value, refleksiColor: "#" + (e.value?.toString() ?? "000000") })} />
            <span className='ml-4 text-xs'>Warna Refleksi</span>
          </div>
          <div>
            <ColorPicker className='border border-slate-400 rounded-sm' value={(value.refleksiBgColor ?? "#ffffff").replace("#", "")} onChange={(e) => setValue({ ...value, refleksiBgColor: "#" + (e.value?.toString() ?? "ffffff") })} />
            <span className='ml-4 text-xs'>Warna Background Refleksi</span>
          </div>
        </div>
        <div className='mt-28'>
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