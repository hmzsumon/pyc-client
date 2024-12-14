'use client';
import React from 'react';
import Container from './Container';
import { Menu, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Image from 'next/image';
import Logo from '@/public/pyc-logo.png';
import Logo2 from '@/public/pyc-logo_2.png';
import localFont from 'next/font/local';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const beaufortLol = localFont({
	src: '../../app/fonts/BeaufortforLOL-Regular.ttf',
});

const NavBar = () => {
	const router = useRouter();
	const { userId } = useAuth();
	return (
		<div className='sticky top-0 border border-b-primary/10 header z-50 '>
			<Container>
				<div className='flex justify-between items-center'>
					<div className=' flex items-center gap-1 cursor-pointer'>
						<Sheet>
							<SheetTrigger asChild>
								<Menu className='md:hidden ' size={34} />
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>Edit profile</SheetTitle>
								</SheetHeader>
								<div>
									<SheetClose asChild>
										<Link
											href='/contact'
											className='bg-red-500 w-full px-4 py-2'
										>
											<span className='text-primary hover:text-primary-dark'>
												Contact
											</span>
										</Link>
									</SheetClose>
								</div>
							</SheetContent>
						</Sheet>

						<div>
							<Image
								src={Logo}
								alt='pyc logo'
								className='w-36 md:w-44'
								onClick={() => router.push('/')}
							/>
						</div>
					</div>
					<div>
						<div className='hidden md:flex gap-3'>
							<Link href='/contact'>
								<span className='text-primary hover:text-primary-dark'>
									Contact
								</span>
							</Link>
							<Link href='/contact'>
								<span className='text-primary hover:text-primary-dark'>
									About
								</span>
							</Link>
						</div>
					</div>
					<div className=' flex items-center gap-3'>
						{!userId && (
							<div className={` ${beaufortLol.className} flex gap-2`}>
								<Link href='/login'>
									<button className=' button button--secondary w-20 md:w-24  h-9'>
										<span className='button__title'> Log in </span>
									</button>
								</Link>
								<button className=' button button--secondary w-20 md:w-24 h-9'>
									<span className='button__title'>Sign up</span>
								</button>
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;
