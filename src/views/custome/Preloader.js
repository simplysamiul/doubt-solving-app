import { CircularProgress, Box } from '@mui/material';
import React from 'react';

const Preloader = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m:6 }}>
            <CircularProgress />
        </Box>
    );
};

export default Preloader;