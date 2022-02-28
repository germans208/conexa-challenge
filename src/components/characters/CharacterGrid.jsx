import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


export default function CharacterGrid() {
    return (
        <Box>
            <Grid container spacing={2}>


                <Grid item xs={12} md={4}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Character 1
                    </Typography>
                    <List dense={true}>
                        {generate(
                            <ListItem>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>,
                        )}
                    </List>
                </Grid>


                <Grid item xs={12} md={4}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Character 2
                    </Typography>
                    <List dense={true}>
                        {generate(
                            <ListItem>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>,
                        )}
                    </List>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Character 3
                    </Typography>
                    <List dense={true}>
                        {generate(
                            <ListItem>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>,
                        )}
                    </List>
                </Grid>
    
            </Grid>

        </Box>
    );
}
