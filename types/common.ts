export type ResultType = {
    success: boolean,
    message: string
}

export type IconType = {
    className: string
}

export type MessageType = {
    message: string
}

export type Lookup = {
    id: string,
    name: string,
    collection: string
}

export const LookupDefault = {
    name: {
        type: String
    },
    id: {
        type: String,
    },
    collection: {
        type: String
    }
}

export type ChoiceType = {
    label: string,
    value: number
}