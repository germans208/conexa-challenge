import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { ConexaContext } from '../context';

const Paginations = () => {
	const appContext = useContext(ConexaContext);
	const { info, fetchPage } = appContext;

	return (
		<Box sm={12}>
			<Pagination
				count={info.pages}
				color="primary"
				size="medium"
				boundaryCount={2}
				onChange={(event, page) => fetchPage(page)}
			></Pagination>
		</Box>
	);
}

export default Paginations;