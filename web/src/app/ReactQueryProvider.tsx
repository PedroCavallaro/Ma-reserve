"use client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/queryClient"
import { ReactNode } from "react"

export const ReactQueryProvider = ({children}:{children: ReactNode}) =>{
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}