import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { ConexaContext } from '../context';

const Paginations = ({ id }) => {
	const appContext = useContext(ConexaContext);
	const { info1, info2, fetchPage } = appContext;

	const info = (id === 1) ? info1.pages : info2.pages;

	return (
		<Box sm={12}>
			<Pagination
				count={info}
				color="primary"
				size="medium"
				boundaryCount={2}
				onChange={(event, page) => fetchPage(page, id)}
			></Pagination>
		</Box>
	);
}

export default Paginations;