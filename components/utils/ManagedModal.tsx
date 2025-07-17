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
    const EditInventoryCategoryForm = dynamic(() => import("@components/InventoryCategory/EditInventoryCategoryModal"))
    return (
        <Sidebar visible={isOpen} fullScreen onHide={closeModal} blockScroll className={view?.toLocaleLowerCase() + "modalcustom"}>
            {view == "USERFORM" && <EditUserForm id={data.id} user={data.userInput} />}
            {view == "RENUNGANFORM" && <EditRenunganForm id={data.id} renungan={data.renungan} />}
            {view == "JEMAATFORM" && <EditJemaatForm id={data.id} jemaat={data.jemaat} />}
            {view == "INVENTORYCATEGORYFORM" && <EditInventoryCategoryForm id={data.id} inventoryCategory={data.inventoryCategory} />}
        </Sidebar>
    )
}

export default ManagedModal