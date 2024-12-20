import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import StoreProvider from './StoreProvider';
import { Toaster } from '@/components/ui/toaster';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Pyc Trade - Your Trusted Investment Partner',
	description:
		'Pyc Trade offers investment opportunities in forex, cryptocurrency, and oil & gas sectors. Grow your wealth with expert strategies and reliable solutions.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning={true}
			>
				<StoreProvider>
					<main className='flex flex-col min-h-screen'>
						{/* <NavBar /> */}
						{children}
						{/* <Footer /> */}
					</main>
				</StoreProvider>
				<ToastContainer
					position='bottom-center'
					autoClose={3000}
					theme='colored'
					hideProgressBar={true}
				/>
			</body>
		</html>
	);
}
