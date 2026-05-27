'use client'

import { RenunganHarianInput } from '@/types/renunganharian';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import "react-quill/dist/quill.snow.css";
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
import FormField from '../UI/FormField';
import { ImageIcon } from 'lucide-react';

type RenunganHarianFormType = {
  data: RenunganHarianInput,
  id?: string
}

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const quillModules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ color: [] }],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link"],
      ["clean"],
    ],
  },
  clipboard: { matchVisual: true },
};

const quillFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "color", "clean"];

const RenunganHarianForm = ({ data, id }: RenunganHarianFormType) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [updateImage, setUpdateImage] = useState(false);
  const [user] = useAtom(userDataAtom);
  const [value, setValue] = useState({ ...data });
  const { mutate: addRenungan, isLoading: loadingAdd } = useAddRenunganMutation();
  const { mutate: updateRenungan, isLoading: loadingUpdate } = useUpdateRenunganMutation(id ?? "");

  useEffect(() => {
    if (user) setValue((prev) => ({ ...prev, author: user.name }))
  }, [user])

  const uploadLogo = useRef<any>(null);
  const onUploadLogo = async (e: any) => {
    const file = e.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then(r => r.blob());
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      const base64data = reader.result;
      setUpdateImage(true);
      setValue((prev) => ({ ...prev, image: [base64data as string] }));
      uploadLogo?.current?.clear();
    }
  }

  const resetData = () => setValue({ ...data, author: user?.name ?? "" })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.author || !value.content || !value.title || !value.date) {
      toast.error("Mohon isi semua field yang wajib");
      return;
    }
    if (id) {
      const input = { ...value };
      if (!updateImage) input.image = [];
      updateRenungan(input, {
        onSuccess: () => {
          toast.success("Renungan berhasil diperbarui!");
          queryClient.invalidateQueries({ queryKey: ["allRenunganAdmin"] })
          closeModal();
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
      })
    } else {
      const input = { ...value };
      resetData();
      addRenungan(input, {
        onSuccess: () => {
          setTimeout(() => resetData(), 100)
          toast.success("Renungan berhasil ditambahkan!");
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
      })
    }
  }

  return (
    <form className="admin-form space-y-6" onSubmit={onSubmit}>
      {/* Gambar */}
      <FormField label="Gambar Cover" hint="Format: JPG, PNG. Maks 10MB">
        <div className="flex items-start gap-4">
          {value.image.length > 0 && (
            <div className="w-32 h-24 rounded-lg overflow-hidden border border-stroke flex-shrink-0">
              <img src={value.image[0]} className="w-full h-full object-cover" alt="preview" />
            </div>
          )}
          {value.image.length === 0 && (
            <div className="w-32 h-24 rounded-lg border-2 border-dashed border-stroke flex items-center justify-center flex-shrink-0">
              <ImageIcon size={24} className="text-bodydark2" />
            </div>
          )}
          <div>
            <FileUpload
              ref={uploadLogo}
              mode="basic"
              name="logo"
              accept="image/*"
              customUpload
              maxFileSize={10000000}
              uploadHandler={onUploadLogo}
              auto
              chooseLabel="Pilih Gambar"
              className="text-sm"
            />
          </div>
        </div>
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="Judul" htmlFor="title" required>
          <input
            id="title"
            className="admin-input"
            value={value.title}
            onChange={(e) => setValue({ ...value, title: e.target.value })}
            autoComplete="off"
            placeholder="Masukkan judul renungan"
          />
        </FormField>

        <FormField label="Ayat Alkitab" htmlFor="verse">
          <input
            id="verse"
            className="admin-input"
            value={value.verse}
            onChange={(e) => setValue({ ...value, verse: e.target.value })}
            autoComplete="off"
            placeholder="Contoh: Yohanes 3:16"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="Tanggal" required>
          <Calendar
            className="w-full"
            inputClassName="admin-input"
            value={new Date(value.date)}
            onChange={(e) => setValue({ ...value, date: e.value ?? new Date() })}
            dateFormat="dd/mm/yy"
            placeholder="Pilih tanggal"
          />
        </FormField>

        <FormField label="Pembuat" htmlFor="author" required>
          <input
            id="author"
            className="admin-input"
            value={value.author}
            onChange={(e) => setValue({ ...value, author: e.target.value })}
            autoComplete="off"
            placeholder="Nama pembuat renungan"
          />
        </FormField>
      </div>

      <FormField label="Isi Ayat">
        <div className="rounded-lg border border-stroke overflow-hidden">
          <QuillEditor
            theme="snow"
            className="min-h-[120px]"
            value={value.isiAyat}
            formats={quillFormats}
            modules={quillModules}
            onChange={(content) => setValue({ ...value, isiAyat: content })}
          />
        </div>
      </FormField>

      <FormField label="Konten Renungan" required>
        <div className="rounded-lg border border-stroke overflow-hidden">
          <QuillEditor
            theme="snow"
            className="min-h-[160px]"
            value={value.content}
            formats={quillFormats}
            modules={quillModules}
            onChange={(content) => setValue({ ...value, content: content })}
          />
        </div>
      </FormField>

      <FormField label="Refleksi">
        <div className="rounded-lg border border-stroke overflow-hidden">
          <QuillEditor
            theme="snow"
            className="min-h-[120px]"
            value={value.refleksi}
            formats={quillFormats}
            modules={quillModules}
            onChange={(content) => setValue({ ...value, refleksi: content })}
          />
        </div>
      </FormField>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={!value.author || !value.content || !value.title || !value.date}
          loading={loadingAdd || loadingUpdate}
          fullWidth
          size="lg"
        >
          {id ? "Simpan Perubahan" : "Tambah Renungan"}
        </Button>
      </div>
    </form>
  )
}

export default RenunganHarianForm
