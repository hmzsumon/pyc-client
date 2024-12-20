'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const WithdrawPage = () => {
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [amount, setAmount] = useState('');
	const [amountError, setAmountError] = useState(false);
	const [address, setAddress] = useState('');
	return (
		<div className='flex items-center justify-center mt-32 md:mt-10 '>
			<div className='flex items-center justify-center md:w-6/12 '>
				<div className='account-card -mt-28 md:-mt-0'>
					<div className='account-card__header py-10 px-4 relative'>
						<div className='absolute inset-0 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-[rgba(3,26,22,0.8)] before:content-[""] z-0'></div>
						<div className='text-center relative'>
							<h2 className='text-3xl md:text-4xl font-bold leading-tight'>
								<span className='base--color'> Withdraw</span>
							</h2>
							<p>
								At Pyc Trade, we provide a seamless process for withdrawing your
								earnings securely and efficiently.
							</p>
						</div>
					</div>
					<div className='account-card__body'>
						<h3 className='text-center text-xl font-bold'>
							Available Balance: $0.00
						</h3>
						<form className='mt-4 space-y-4 '>
							<div className='space-y-2'>
								<label>Amount to Withdraw</label>
								<input
									type='number'
									className='form-control focus:outline-none focus:ring-1 focus:ring-[rgba(204,163,84,0.5)] focus:bg-transparent'
									placeholder='Enter amount'
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
								{amountError && (
									<p className='text-red-500 text-xs'>
										Please enter a valid email
									</p>
								)}
							</div>

							<div className='space-y-2'>
								<label>
									Receive wallet Address{' '}
									<span className=' text-base-color'>(TRC-20)</span>
								</label>
								<input
									type='text'
									className='form-control focus:outline-none focus:ring-1 focus:ring-[rgba(204,163,84,0.5)] focus:bg-transparent'
									placeholder='Enter wallet address'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
								{amountError && (
									<p className='text-red-500 text-xs'>
										Please enter a valid email
									</p>
								)}
							</div>

							<div className='space-y-2'>
								<label>Password</label>
								<div className='relative'>
									<input
										type={showPassword ? 'text' : 'password'}
										className='form-control focus:outline-none focus:ring-1 focus:ring-[rgba(204,163,84,0.5)] focus:bg-transparent'
										placeholder='Enter password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<button
										type='button'
										onClick={() => setShowPassword(!showPassword)}
										className='absolute inset-y-0 text-gray-500 right-0 pr-3 flex items-center text-sm leading-5'
									>
										{showPassword ? <FaEyeSlash /> : <FaEye />}
									</button>
								</div>
							</div>

							<div className='mt-3'>
								<button className='cmn-btn font-bold w-full' type='submit'>
									Withdraw
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WithdrawPage;
