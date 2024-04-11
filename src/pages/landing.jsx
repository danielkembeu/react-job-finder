import React from 'react'
import NavBarComponent from '../lib/components/nav-bar'
import SearchBarComponent from '../lib/components/search'

// Hero background image...
import hero from '../assets/hero.png'


import CategoryItem from '../lib/components/category/item'

export default function LandingPage() {
  return (
    <main>
      {/* The top navigation bar */}
      <NavBarComponent />

      {/* */}
      <header style={{ backgroundImage: hero }} className="my-12 flex flex-col justify-center items-center w-full">
        <h1 className='text-4xl font-bold text-gray-600 my-10'>The <span className='text-green-500'>appropriate</span> place to find Jobs</h1>
        <SearchBarComponent />
      </header>

      {/* Categories section */}
      <section className='w-full h-full p-8'>
        <h2 className='text-2xl font-bold text-gray-500 my-4 text-center'>Categories</h2>
        <div className='w-full h-full flex justify-center'>
          <div className='w-full flex flex-wrap gap-2 justify-center items-center mt-2'>
            {
              [
                'Technologies', 'Sport', 'Astronomy', 'Care Center',
                'Finances', 'Medecine', 'Harvest', 'Garden'
              ].map((item, index) => <CategoryItem key={index} item={item} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}
