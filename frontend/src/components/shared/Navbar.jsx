import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Hook to get current location
    const [isScrolled, setIsScrolled] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine if the background should be transparent or white
    const isHomePage = location.pathname === '/';
    const navbarBgClass = isHomePage ? (isScrolled ? 'bg-white' : 'bg-transparent') : 'bg-white';
    const textColorClass = isHomePage ? (isScrolled ? 'text-black' : 'text-white') : 'text-black';
    const linkHoverClass = isHomePage ? (isScrolled ? 'hover:text-gray-700' : 'hover:text-gray-300') : 'hover:text-gray-700';

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-colors ${navbarBgClass}`}>
            <div className={`flex items-center md:px-8 justify-between mx-auto max-w-7xl h-16`}>
                <div>
                    <h1 className={`text-2xl font-bold ${textColorClass}`}>
                        Job<span className='text-[#F83002]'>Portal</span>
                    </h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>
                            <Link
                                to="/"
                                className={`transition-colors ${textColorClass} ${linkHoverClass}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/jobs"
                                className={`transition-colors ${textColorClass} ${linkHoverClass}`}
                            >
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/browse"
                                className={`transition-colors ${textColorClass} ${linkHoverClass}`}
                            >
                                Browse
                            </Link>
                        </li>
                        {user && user.role === 'recruiter' && (
                            <>
                                <li>
                                    <Link
                                        to="/admin/companies"
                                        className={`transition-colors ${textColorClass} ${linkHoverClass}`}
                                    >
                                        Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/jobs"
                                        className={`transition-colors ${textColorClass} ${linkHoverClass}`}
                                    >
                                        Jobs
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {!user ? (
                        <div className='flex items-center gap-2'>
                            <Link to="/login">
                                <Button variant="outline">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className={`bg-[#E88073] hover:bg-[#E88073] ${textColorClass}`}>
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div>
                                    <div className='flex gap-2 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        {user && user.role === 'student' && (
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link">
                                                    <Link to="/profile">View Profile</Link>
                                                </Button>
                                            </div>
                                        )}
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button onClick={logoutHandler} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
