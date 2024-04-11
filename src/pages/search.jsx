import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../lib/ui/button';
import JobRenderer from '../lib/components/job/renderer';
import NavBarComponent from '../lib/components/nav-bar';

export default function SearchPage() {

    // search input state
    const [searchString, setSearchString] = React.useState('');

    // Show results state
    const [searchResults, setSearchResults] = React.useState([]);
    // Navigation hook
    const router = useNavigate();


    const handleOnChange = (event) => {
        setSearchString(event.target.value);
    }

    // The functionnality behind the search.
    const onSearch = (event) => {

        // Preventing the browser to refresh after the submission of the form
        event.preventDefault();
        // Redirecting to the search page.
        router('/search');

    }
    return (
        <main className='w-full h-screen flex flex-col items-center'>
            <h2 className='text-4xl font-bold text-gray-500 my-16'>Find jobs now</h2>
            <NavBarComponent />
            <form onSubmit={onSearch} className='w-[30rem] h-[50px] border border-green-500 rounded-md flex items-center justify-between p-2'>
                <input autoFocus value={searchString} onChange={handleOnChange} className='w-[20rem] focus:outline-none ml-2' type="text" placeholder='Search for any job...' />
                <Button type="submit" title='Search' />
            </form>

            {/* The UI shown on the searchResults */}
            {searchResults.length > 0 && <JobRenderer items={searchResults} />}
        </main>
    )
}
