"use client";

import React from 'react'

import { Sidebar } from 'primereact/sidebar';
import dynamic from 'next/dynamic';
import { useModalAction, useModalState } from './ModalProvider';


const ManagedModal = () => {
    const { isOpen, data, view } = useModalState();
    const { closeModal } = useModalAction();
    const EditUserForm = dynamic(() => import("@components/User/EditUserModal"))
    return (
        <Sidebar visible={isOpen} fullScreen onHide={closeModal} blockScroll className={view?.toLocaleLowerCase() + "modalcustom"}>
            {view == "USERFORM" && <EditUserForm id={data.id} user={data.userInput} />}
        </Sidebar>
    )
}

export default ManagedModal