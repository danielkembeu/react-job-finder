import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchBarComponent() {

    const router = useNavigate();

    return (
        <form className='w-[30rem] h-[50px] border border-green-500 rounded-md flex items-center justify-between p-2'>
            <input onFocus={() => router('/search')} className='w-[20rem] focus:outline-none ml-2' type="text" placeholder='Search for any job...' />
        </form>
    )
}
