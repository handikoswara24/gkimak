import { Pagination } from "./pagination";

export type JemaatType = {
  _id: string;
  nama: string;
  nomorAnggota: string;
  telepon: string;
};

export type JemaatInput = {
  nama: string;
  nomorAnggota: string;
  telepon: string;
};

export type ListJemmat = {
  jemaat: JemaatType[];
  pagination: Pagination;
};

export type GetJemaatInput = {
  telepon: string;
};

export interface IJemaatDocument extends Document {
  nama: string;
  nomorAnggota: string;
  telepon: string;
}

export interface IJemaat extends Document {
  nama: string;
  nomorAnggota: string;
  telepon: string;
}

export type JemaatById = {
  jemaat: JemaatType;
};
