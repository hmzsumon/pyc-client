import React from 'react';
import Container from '../layout/Container';
import PackageCard from './PackageCard';

const packages = [
	{
		id: 1,
		title: 'Pyc Package-01',
		investment: 100,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
	{
		id: 2,
		title: 'Pyc Package-02',
		investment: 200,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},

	{
		id: 3,
		title: 'Pyc Package-03',
		investment: 300,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
	{
		id: 4,
		title: 'Pyc Package-04',
		investment: 400,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
	{
		id: 5,
		title: 'Pyc Package-05',
		investment: 500,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
	{
		id: 6,
		title: 'Pyc Package-06',
		investment: 1000,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
	{
		id: 7,
		title: 'Pyc Package-07',
		investment: 5000,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
	{
		id: 8,
		title: 'Pyc Package-08',
		investment: 10000,
		return: '0.5% - 1.5%',
		days: 'Five days per week',
		duration: 'For 183 days',
		totalReturn: 'Total 100% + Capital',
	},
];

const PackageSection = () => {
	return (
		<div className=' py-20'>
			<Container>
				<div className=' flex flex-col gap-3 items-center justify-center'>
					<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
						<span>Investment</span> <b className='text-[#cca354]'>Plans</b>
					</h1>
					<p>
						To make a solid investment, you have to know where you are
						investing. Find a plan which is best for you.
					</p>
				</div>

				<div className=' my-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
						{packages.map((pkg) => (
							<PackageCard key={pkg.id} pkg={pkg} />
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default PackageSection;
