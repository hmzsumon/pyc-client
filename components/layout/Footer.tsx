import React from 'react';
import Logo2 from '@/public/pyc-logo_2.png';
import Image from 'next/image';
import { clsx } from 'clsx';

const Footer = () => {
	return (
		<div className=' pt-10 border-t border-[#cca354]'>
			<div className=' px-4'>
				<div className=' grid grid-cols-2 items-center '>
					<div className=' space-y-3 '>
						<Image src={Logo2} alt='logo' className=' w-28 ' />
						<div>
							<p className=' text-sm'>
								26/1, Sofiyskaya Embankment, 117997, Moscow, Russian Federation
							</p>
						</div>
					</div>

					<div className=' justify-self-end'>
						<ul className=' space-y-1 '>
							<h2 className=' font-semibold'>
								Quick <span className='text-[#cca354]'> Links</span>
							</h2>
							<li className=' text-sm'>Home</li>
							<li className=' text-sm'>Privacy & Policy</li>
							<li className=' text-sm'>Terms & Conditions</li>
						</ul>
					</div>
				</div>
			</div>

			<div className=' py-4 bg-slate-950 mt-6'>
				<p className=' text-center text-xs'>
					© 2024 Pyc Trade. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;