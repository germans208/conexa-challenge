import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paginations from './Paginations';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Characters = (props) => {

    const { character, info } = props.characters;

    return (
        <Fragment>
            {character !== undefined ?
                (
                    <div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} columns={16}>
                                {character.map((character, index) => (
                                    <Grid item xs={8} key={index}>
                                        <Card sx={{ display: 'flex' }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 151 }}
                                                image={character.image}
                                                alt={character.name}
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography variant="h6" gutterBottom component="div">
                                                        {character.name}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                        {character.status} - {character.species}
                                                    </Typography>
                                                </CardContent>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        {(info.pages > 1) &&
                            (
                                <Paginations
                                    nextPage={props.nextPage}
                                    prevPage={props.prevPage}
                                    page={props.page}
                                />
                            )}
                    </div>
                ) : (
                    <div>
                        <h2>No hay Personajes</h2>
                    </div>
                )}
        </Fragment>
    );
}

export default Characters;