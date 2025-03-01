"use client";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export function GlobalProvider({ children }:{ children: ReactNode }){
    return<>
     <Toaster />
     <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </>
}