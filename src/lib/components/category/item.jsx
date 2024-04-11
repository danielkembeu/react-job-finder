import React from 'react';
import { LuBookmark } from 'react-icons/lu'

export default function CategoryItem({
    item: {
        title = "Category's name",
        counter = 0 }
}) {
    return (
        <div className='w-[16rem] h-[6rem] rounded-md bg-gray-200 p-4 overflow-hidden'>
            <div className='w-full h-full flex space-x-8 items-center'>
                <LuBookmark size={26} className='text-green-500' />
                <div className='w-full'>
                    <h1 className='text-xl text-gray-600 font-bold'>{title}</h1>
                    <span className='text-gray-500'>{counter} Jobs</span>
                </div>
            </div>
        </div>
    )
}
