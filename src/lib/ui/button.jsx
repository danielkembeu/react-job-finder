import React from 'react'

export default function Button({
    title,
    type,
    onButtonClicked = () => true
}) {
    return (
        <button type={type} onClick={onButtonClicked}
            className='bg-green-400 active:bg-green-500 transition duration-200 text-white font-bold rounded-md py-1 px-4'>
            {title}
        </button>
    )
}
