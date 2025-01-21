"use client";

import React from 'react'

import { Sidebar } from 'primereact/sidebar';
import dynamic from 'next/dynamic';
import { useModalAction, useModalState } from './ModalProvider';


const ManagedModal = () => {
    const { isOpen, data, view } = useModalState();
    const { closeModal } = useModalAction();
    const EditUserForm = dynamic(() => import("@components/User/EditUserModal"));
    const EditRenunganForm = dynamic(() => import("@components/RenunganHarian/EditRenunganModal"));
    const EditJemaatForm = dynamic(() => import("@components/Jemaat/EditJemaatModal"));
    return (
        <Sidebar visible={isOpen} fullScreen onHide={closeModal} blockScroll className={view?.toLocaleLowerCase() + "modalcustom"}>
            {view == "USERFORM" && <EditUserForm id={data.id} user={data.userInput} />}
            {view == "RENUNGANFORM" && <EditRenunganForm id={data.id} renungan={data.renungan} />}
            {view == "JEMAATFORM" && <EditJemaatForm id={data.id} jemaat={data.jemaat} />}
        </Sidebar>
    )
}

export default ManagedModal