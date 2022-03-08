import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';

const Character = ({ character, idClick, name, image, status, species }) => {

    return (
        <Grid item xs={8} sm={8} key={name}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={image}
                    alt={name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {status} - {species}
                        </Typography>
                        <CustomButton character={character} idClick={idClick} />
                    </CardContent>

                </Box>
            </Card>
        </Grid>
    );
}

export default Character;