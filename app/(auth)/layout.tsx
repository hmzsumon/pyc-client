import React from 'react';
import Image from 'next/image';
import Logo from '@/public/pyc-logo.png';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Bell } from 'lucide-react';
import localFont from 'next/font/local';
import Link from 'next/link';

const josefinSans = localFont({
	src: '../../app/fonts/JosefinSans-Regular.ttf',
});

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<main>
						<header className='flex  h-16 shrink-0 items-center gap-2  transition-[width,height] border-b ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
							<div className='flex items-center gap-2 px-4 '>
								<SidebarTrigger className='-ml-1' />
								<Separator orientation='vertical' className='mr-2 h-4' />
								<Breadcrumb>
									<BreadcrumbList>
										<BreadcrumbItem>
											<BreadcrumbPage>
												<div className='flex items-center justify-center h-10 md:hidden'>
													<Image src={Logo} alt='Logo' className=' w-36' />
												</div>
											</BreadcrumbPage>
										</BreadcrumbItem>
									</BreadcrumbList>
								</Breadcrumb>
							</div>

							<div className='flex-1 flex items-center justify-end px-4'>
								<Link href='/notifications'>
									<Bell className=' cursor-pointer' />
								</Link>
							</div>
						</header>
						<div className={`px-6 py-4 ${josefinSans.className}`}>
							{children}
						</div>
					</main>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
};

export default AuthLayout;
