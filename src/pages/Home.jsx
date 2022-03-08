import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Characters from "../components/Characters";
import Paginations from "../components/Paginations";

//import CustomAppBar from '../components/layout/CustomAppBar';
import FilterCharacterGrid from '../components/FilterCharacterGrid';

const Home = () => {
    return (
        <div>
            <Container>
                <Box>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Characters id={1} />
                            <Paginations id={1} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Characters id={2}/>
                            <Paginations id={2} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container fixed>
                <FilterCharacterGrid  />
            </Container>
            
        </div>
    );
}

export default Home;