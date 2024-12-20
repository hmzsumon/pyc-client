'use client';
import { DashboardCard } from '@/components/auth/dashboard/DashboardCard';
import DashboardTop from '@/components/auth/dashboard/DashboardTop';
import React from 'react';
import Bag_1 from '@/public/fdw.png';
import Bag_2 from '@/public/dw2.png';
import Bag_3 from '@/public/addfund.png';
import Bag_4 from '@/public/wup.png';
import Reward_1 from '@/public/rewards.png';
import { useSelector } from 'react-redux';
import { useGetDashboardQuery } from '@/redux/features/auth/authApi';

const Dashboard = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading, isError, isSuccess, error } =
		useGetDashboardQuery(undefined);
	const { dashboardData } = data || {};
	return (
		<div>
			<DashboardTop />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
				<DashboardCard
					title='Earning Balance'
					amount={user?.m_balance || 0}
					icon={Bag_1}
					is_btn={true}
					btn_text='Withdraw'
				/>
				<DashboardCard
					title='Deposit Balance'
					amount={dashboardData?.deposit_balance || 0}
					icon={Bag_2}
					is_btn={true}
					btn_text='Add Funds'
				/>
				<DashboardCard
					title='Total Invest'
					amount={dashboardData?.total_investment || 0}
					icon={Bag_3}
					is_btn={true}
					btn_text='Invest Now'
				/>
				<DashboardCard
					title='Total Reward'
					amount={dashboardData?.total_reward || 0}
					icon={Reward_1}
					is_btn={false}
				/>
				<DashboardCard
					title='Total Referral'
					amount={dashboardData?.total_referral_earning || 0}
					icon={Bag_4}
					is_btn={false}
				/>
				<DashboardCard
					title='Total Generation'
					amount={dashboardData?.generation_earning || 0}
					icon={Bag_1}
					is_btn={false}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
