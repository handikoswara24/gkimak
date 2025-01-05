'use client'

import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'swiper/css';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { ModalProvider } from './ModalProvider';
import ManagedModal from './ManagedModal';
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

const Provider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ModalProvider>
                {children}
                <ManagedModal />
                <ToastContainer />
                <ConfirmDialog />
            </ModalProvider>
        </QueryClientProvider>
    )
}

export default Provider