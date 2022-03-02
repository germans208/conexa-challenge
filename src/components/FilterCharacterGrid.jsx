import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ConexaContext } from '../context';

const CharacterGrid = () => {

    const appContext = useContext(ConexaContext);
    const { filter, data, dataEspisodes } = appContext;

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

    // const espisodesList = (filter !== null) && dataEspisodes.map(item => item.characters);

    const dataFilter = dataEspisodes.map(item => (
        {
            episode: item.episode,
            air_date: item.air_date,
            characters: item.characters.filter(i => getLastItem(i) === filter.toString())
        }
    )).filter(item => item.characters.length > 0)

    console.log(filter)

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Character 1 - Only Episodes
                    </Typography>
                    <List dense={true}>
                        {dataFilter.map((item, i) => (
                            <ListItem>
                                <ListItemText
                                    primary={`Espisode: ${item.episode} Air date: ${item.air_date} `}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>

            </Grid>

        </Box>
    );
}

export default CharacterGrid;