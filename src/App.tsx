import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { JSX } from 'react';

export const App = observer((): JSX.Element => {
    return <Grid container>ToDo list</Grid>;
});
