import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/button';

// icons
import { LuBell } from 'react-icons/lu';


export default function NavBarComponent() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [notificationMessage, setNotificationMessage] = React.useState();

    const router = useNavigate();

    React.useEffect(() => {

        // Handling the scroll behavior to enable the navigation bar background blur effect!
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        // Notification simulation...
        const interval = setInterval(() => {
            setNotificationMessage({
                title: "Job Alert",
                content: "A post of Web Developer is free ! Here's the job requirements and the salary.",
                author: "SmartTech Company"
            });


            // Resetting the notification to be empty after 10 seconds.
            setTimeout(() => setNotificationMessage(null), 10000);
        }, 12000);


        // Clearing the use effect !
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        }

    }, []);


    return (
        <nav className={`fixed w-full top-0 left-0 mb-10 border-b py-2 bg-transparent flex items-center justify-between`}>
            <div className={`w-full h-full absolute bg-white top-0 left-0 transition duration-500 ${isScrolled && 'bg-opacity-80 backdrop-blur-md'}`} />
            <div className='w-full px-6 relative z-10 flex items-center'>
                <div className='w-full'>
                    <Link to='/'>
                        <h1 className='cursor-pointer text-green-500 font-bold text-2xl mr-2'>Job <span className=' text-gray-600'>Finder</span></h1>
                    </Link>
                </div>

                <div className='flex items-center justify-end gap-10 w-full'>
                    <ul className='cursor-pointer font-bold text-gray-600 flex items-center gap-6'>
                    <Link to='/'>
                            <li className='focus:text-gray-400'>Home</li>
                        </Link>
                        <Link to='all-jobs'>
                            <li className='focus:text-gray-400'>Popular Jobs</li>
                        </Link>
                        {/* <Link to='categories'>
                            <li>Categories</li>
                        </Link> */}
                        <Link to='/about'>
                            <li className='focus:text-gray-400'>About us</li>
                        </Link>
                    </ul>

                    <div className='ml-4 flex space-x-10 items-center'>
                        <div className='relative p-1.5 rounded-full border'>
                            <LuBell size={18} />
                            <span className={`bg-green-500 w-2 h-2 absolute rounded-full top-[3px] right-[6px] ${notificationMessage ?? 'animate-ping'}`} />
                        </div>
                        <Button type={2} title='Join us' />
                    </div>
                </div>
            </div>
        </nav>
    )
}
