'use client';
import React from 'react';
import {
	useGet2LevelUserQuery,
	useGet3LevelUserQuery,
} from '@/redux/features/auth/authApi';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const LevelThreeTeamPage = () => {
	const { data, error, isLoading } = useGet3LevelUserQuery(undefined);
	const { users } = data || { users: [] };
	const { count, sales } = data || { count: 0, sales: 0 };

	const columns: GridColDef<any>[] = [
		{
			field: 'name',
			headerName: 'Name',
			width: 200,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.name}</p>
				</div>
			),
		},
		{
			field: 'customer_id',
			headerName: 'Customer ID',
			width: 200,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.customer_id}</p>
				</div>
			),
		},
		{
			field: 'total_investment',
			headerName: 'Total Investment',
			width: 200,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.total_investment}</p>
				</div>
			),
		},
	];

	const rows: any = [];
	users &&
		users.map((user: any) => {
			return rows.push({
				id: user.customer_id ? user.customer_id : user._id,
				customer_id: user.customer_id,
				name: user.name,
				email: user.email,
				total_investment: user.total_investment,
			});
		});

	return (
		<div>
			<ThemeProvider theme={darkTheme}>
				<DataGrid
					rows={rows}
					columns={columns}
					// rowHeight={38}
					// initialState={{
					// 	pagination: {
					// 		paginationModel: { pageSize: 5, page: 0 },
					// 	},
					// }}
					sx={{
						boxShadow: 2,
						border: 2,
						borderColor: 'primary.light',
						'& .MuiDataGrid-cell:hover': {
							color: 'primary.main',
						},
					}}
				/>
			</ThemeProvider>
		</div>
	);
};

export default LevelThreeTeamPage;
