import React, { useState } from 'react'
import { Search, X } from 'lucide-react';

type SearchBoxProps = {
    onClickSearch: (input: string) => void,
    placeholder?: string,
}

const SearchBox = ({ onClickSearch, placeholder = "Cari..." }: SearchBoxProps) => {
    const [search, setSearch] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClickSearch(search);
    }

    const onClear = () => {
        setSearch("");
        onClickSearch("");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='flex items-center gap-2'>
                <div className='relative'>
                    <Search size={15} className='absolute left-3 top-1/2 -translate-y-1/2 text-body pointer-events-none' />
                    <input
                        type="text"
                        className='w-64 rounded-lg border border-stroke bg-white pl-9 pr-9 py-2.5 text-sm text-black placeholder:text-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoComplete='off'
                        placeholder={placeholder}
                    />
                    {search && (
                        <button
                            type="button"
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-body hover:text-danger transition-colors'
                            onClick={onClear}
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>
                <button
                    type="submit"
                    className='flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors'
                >
                    <Search size={14} />
                    Cari
                </button>
            </div>
        </form>
    )
}

export default SearchBox
