import { NextRequest } from 'next/server';
import { IUser } from "@/backend/models/user"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"

declare module "next/server" {
    interface NextRequest {
        user: IUser
    }
}
declare module "@reduxjs/toolkit/query/react" {
    interface FetchBaseQueryError {
        data:any
    }
}