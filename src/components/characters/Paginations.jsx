import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Paginations = (props) => {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="text" onClick={props.prevPage}>Anterior</Button>
			<Button variant="text" onClick={props.nextPage}>Siguiente</Button>
			<Typography variant="subtitle1" color="text.secondary" component="div">
				Pagina {props.page}
			</Typography>
		</Stack>
	);
}

export default Paginations;