import React, { Fragment, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ConexaContext } from '../context';
import Character from './Character';

const Characters = () => {
    const appContext = useContext(ConexaContext);
    const { data } = appContext;

    return (
        <Fragment>
            <Grid container spacing={1} columns={16}>
                {data.map((character) => (
                    <Character
                        key={character.id}
                        id={character.id}

                        image={character.image}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                    />
                ))}
            </Grid>
        </Fragment>
    );
}

export default Characters;