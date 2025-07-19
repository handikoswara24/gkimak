"use client";

import React, { useContext, PropsWithChildren, createContext, useReducer } from 'react';

type MODAL_VIEWS = "QRUSER" 
                  | "RENUNGANFORM"
                  | "USERFORM"
                  | "JEMAATFORM"
                  | "INVENTORYCATEGORYFORM"
                  | "INVENTORYFORM"

type State = {
    view?: MODAL_VIEWS,
    data?: any,
    isOpen: boolean
}

const initialState: State = {
    view: undefined,
    data: null,
    isOpen: false
}

type Action = { type: 'open', view?: MODAL_VIEWS, payload?: any } | { type: 'close' };

const modalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'open': {
            return {
                ...state,
                view: action.view,
                data: action.payload,
                isOpen: true
            }
        }
        case 'close': {
            return {
                ...state,
                data: null,
                isOpen: false,
                view: undefined
            }
        }
        default: {
            throw Error("Unknown Action");
        }
    }
}

const ModalStateContext = createContext<State>(initialState);
ModalStateContext.displayName = "ModalStateContext";

const ModalActionContext = createContext<React.Dispatch<Action> | undefined>(undefined);
ModalActionContext.displayName = "ModalActionContext";

const ModalProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);
    return (
        <ModalStateContext.Provider value={state}>
            <ModalActionContext.Provider value={dispatch}>
                {children}
            </ModalActionContext.Provider>
        </ModalStateContext.Provider>
    )
}

const useModalState = () => {
    const context = useContext(ModalStateContext);
    if (context === undefined) {
        throw new Error("useModelState must be used within Modal Provider");
    }
    return context;
}

const useModalAction = () => {
    const dispatch = useContext(ModalActionContext);
    if (dispatch === undefined) {
        throw new Error("useModelActionmust be used within Modal Provider");
    }

    return {
        openModal: (view?: MODAL_VIEWS, payload?: any) => {
            dispatch({ type: "open", view, payload })
        },
        closeModal: () => {
            dispatch({ type: "close" })
        }
    }
}

export { ModalProvider, useModalState, useModalAction}