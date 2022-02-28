import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Characters from "../components/characters/Characters";
import Container from '@mui/material/Container';
import CharacterGrid from '../components/characters/CharacterGrid';

//import CustomAppBar from '../components/layout/CustomAppBar';

const Home = () => {
    let apiUrl = `https://rickandmortyapi.com/api/character`;
    let data = {
        info: {},
        character: [],
        error: '',
    };

    const [characters, setCharacters] = useState(data);
    const [url, setUrl] = useState(apiUrl);
    const [page, setPage] = useState(1);

    const fetchAPI = async () => {
        await fetch(url)
            .then(response => response.json())
            .then(data => setCharacters({
                info: data.info,
                character: data.results,
                error: data.error
            }))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchAPI(url);
    }, [url]) // eslint-disable-line react-hooks/exhaustive-deps


    const nextPage = () => {
        setUrl(characters.info.next);
        setPage(page + 1);
    };

    const prevPage = () => {
        if (characters.info.prev !== null) {
            setUrl(characters.info.prev);
            setPage(page - 1);
        }
    };

    return (
        <div>
            <Container>
                <Box>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            asdasd
                        </Grid>
                        {/* 
                       <Characters characters={characters} nextPage={nextPage} prevPage={prevPage} page={page} />
                    
                    <Grid item xs={6}>
                        <Characters characters={characters} nextPage={nextPage} prevPage={prevPage} page={page} />
                    </Grid> */}
                    </Grid>
                </Box>
            </Container>
            <Container fixed>
                    <CharacterGrid />
            </Container>
        </div>
    );
}

export default Home;