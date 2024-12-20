'use client';
import { useGetUserPackagesQuery } from '@/redux/features/package/packageApi';
import React from 'react';

const MyPlansPage = () => {
	const { data, isLoading, isSuccess, isError, error } =
		useGetUserPackagesQuery(undefined);

	const { userPackage } = data || {};
	const { myPackages } = data || { myPackages: [] };
	return (
		<div className='flex items-center justify-center mt-32 md:mt-10 '>
			<div className='flex items-center justify-center md:w-6/12 '>
				<div className='account-card -mt-28 md:-mt-0'>
					<div className='account-card__header py-10 px-4 relative'>
						<div className='absolute inset-0 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-[rgba(3,26,22,0.8)] before:content-[""] z-0'></div>
						<div className='text-center relative'>
							<h2 className='text-3xl md:text-4xl font-bold leading-tight'>
								<span className='base--color'>My Plans</span>
							</h2>
							<p>
								At Pyc Trade, we provide a seamless process for withdrawing your
								earnings securely and efficiently.
							</p>
						</div>
					</div>
					<div className='account-card__body'>
						<h4 className='package-card__title base--color mb-2 text-center'>
							Total Take Profit: $
							{userPackage?.total_return.toLocaleString('en-US', {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</h4>
						<ul className='package-card__features mt-4'>
							<li>
								Total Investment:{' '}
								<span className='base--color'>
									$
									{userPackage?.total_invest.toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</span>
							</li>
						</ul>
						<div className='package-card__range mt-5 base--color'>
							<h2>My Plans:</h2>
							{myPackages?.map((pkg: any) => (
								<div key={pkg._id}>
									<h4>{pkg.title}</h4>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPlansPage;
