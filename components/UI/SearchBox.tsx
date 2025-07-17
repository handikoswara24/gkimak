import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'
import SearchIcon from '../Icons/SearchIcon';
import XIcon from '../Icons/XIcon';

type SearchBoxProps = {
    onClickSearch: (input: string) => void,
}

const SearchBox = ({ onClickSearch }: SearchBoxProps) => {
    const [search, setSearch] = useState("");
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.length < 3) {
            return;
        }

        onClickSearch(search);
    }

    const onClear = () => {
        setSearch("");

        onClickSearch("");
    }
    return (
        <form onSubmit={onSubmit} className='mb-4'>
            <div className='flex space-x-3'>
                <div className='relative w-60'>
                    <InputText className='rounded-xl text-xs border border-slate-300 pl-4 pr-8 py-3 w-60' id="search"
                        value={search} onChange={(e) => setSearch(e.target.value)} autoComplete='off' placeholder='Search' />
                    {search && (
                        <div className='cursor-pointer absolute top-[10px] right-2' onClick={onClear}>
                            <XIcon className='size-5 text-pink-500' />
                        </div>
                    )}
                </div>

                <button type="submit">
                    <SearchIcon className='size-5' />
                </button>
            </div>
        </form>
    )
}

export default SearchBox