'use client'

import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { ConfirmDialog } from 'primereact/confirmdialog';
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

const Provider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer />
            <ConfirmDialog />
        </QueryClientProvider>
    )
}

export default Provider