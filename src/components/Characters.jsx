import React, { Fragment, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ConexaContext } from '../context';
import Character from './Character';

const Characters = ({ id }) => {
    const appContext = useContext(ConexaContext);
    const { data } = appContext;

    console.log(appContext)
    return (
        <Fragment>
            <Grid container spacing={1} columns={16}>
                {data?.map((character) => (
                    <Character
                        key={character.id}
                        character={id}
                        idClick={character.id}

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