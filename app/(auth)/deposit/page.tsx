'use client';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';

import CopyToClipboard from '@/lib/CopyToClipboard';

import Image from 'next/image';
import Qr_code from '@/public/pyc_qr_code.png';
import { useDepositWithBinanceMutation } from '@/redux/features/deposit/depositApi';

const DepositPage = () => {
	const [depositWithBinance, { isLoading, isError, isSuccess, error }] =
		useDepositWithBinanceMutation();
	const depositAddress = 'TJVnLiPQxpUXL32rWE9Lefs3SRGE4jbt8V';
	const [txId, setIxId] = React.useState('');

	const handleConfirm = () => {
		if (!txId) {
			toast.error('Please enter a valid transaction ID');
			return;
		}
		depositWithBinance({ txId });
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Deposit confirmed');
		}
		if (isError) {
			toast.error((error as fetchBaseQueryError).data?.message);
		}
	}, [isSuccess, isError, error]);
	return (
		<div>
			<div className='flex items-center justify-center mt-32 md:mt-10 '>
				<div className='flex items-center justify-center md:w-6/12 '>
					<div className='account-card -mt-28 md:-mt-0'>
						<div className='account-card__header py-10 px-4 relative'>
							<div className='absolute inset-0 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-[rgba(3,26,22,0.8)] before:content-[""] z-0'></div>
							<div className='text-center relative'>
								<h2 className='text-3xl md:text-4xl font-bold leading-tight'>
									<span className='base--color'>Deposit</span>
								</h2>
								<p>
									Easily fund your account with Pyc Trade. Deposits are quick,
									secure, and ensure that your investments begin working for you
									as soon as possible.
								</p>
							</div>
						</div>
						<div className='account-card__body'>
							<h3 className='text-center text-xl font-bold'>
								Available Balance: $0.00
							</h3>
							<div className='mt-4 space-y-3 '>
								{isLoading ? (
									<div className='flex justify-center my-4 py-20'>
										<BounceLoader color='#cca354' size={200} />
									</div>
								) : (
									<div className='space-y-3'>
										<div className='flex items-center '>
											<p>
												Network:{' '}
												<span className=' text-base-color font-bold'>
													USDT TRC-20
												</span>
											</p>
										</div>

										<div>
											<p>
												Amount: <span>Any Amount</span>
											</p>
										</div>

										<div className='flex items-center list-none'>
											<li className='flex flex-col md:flex-row  gap-1'>
												<span>Address:</span>{' '}
												<span className=' text-xs'>
													TYkjT9ADgt3Kk1tPw3bQWBtkENgPHTNaxA
												</span>
											</li>
											<CopyToClipboard
												size='text-lg'
												text={'TYkjT9ADgt3Kk1tPw3bQWBtkENgPHTNaxA'}
											/>
										</div>
										<div className='my-2'>
											<Image
												src={Qr_code}
												alt='QR Code'
												className=' w-44 mx-auto'
											/>
										</div>
										<div>
											<div className='space-y-2'>
												<label>Enter Transaction ID </label>
												<input
													type='text'
													className='form-control focus:outline-none focus:ring-1 focus:ring-[rgba(204,163,84,0.5)] focus:bg-transparent'
													placeholder='Enter Transaction ID'
													value={txId}
													onChange={(e) => setIxId(e.target.value)}
												/>
											</div>

											<div className='mt-3'>
												<button
													className='cmn-btn font-bold w-full'
													onClick={handleConfirm}
												>
													{isLoading ? (
														<PulseLoader color='#fff' size={8} margin={2} />
													) : (
														'Confirm'
													)}
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DepositPage;
