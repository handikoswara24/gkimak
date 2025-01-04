import { NextRequest } from "next/server"
import { Pagination } from "./pagination"
import { Document } from 'mongoose';

export type User = {
    username: string,
    role: string,
    _id: string,
}
export type ListUser = {
    users: User[],
    pagination: Pagination
}

export type UserInput = {
    username: string,
    password: string,
    role?: string
}

export type LoginInput = {
    username: string,
    password: string,
}

export type LoginOutput = {
    _id: string,
    username: string,
    role: string,
    token: string
}

export interface IUserDocument extends Document {
    username: string,
    password: string,
    role: string,
}

export interface IUser extends IUserDocument {
    matchPassword(password: string): Promise<boolean>;
}

export interface NextRequestWithUser extends NextRequest {
    user: any
}
